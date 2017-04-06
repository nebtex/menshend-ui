import { componentByNodeRegistery } from 'mobx-react/custom';
import { version } from 'punycode';
import { action, observable, computed, ObservableMap } from 'mobx';
import { observer } from 'mobx-react';
import String from "./String";
import Boolean from "./Boolean";
import Integer from "./Integer";
import StringVector from "./StringVector";
import {
    CoreTypes,
    FieldInline,
    FormField,
    HashMap,
    Inline,
    IRenderer,
    IRendererProps,
    ITableProps,
    IUnionProps,
    OmniDescription,
    OmniField,
    OmniSchema,
    OmniSchemaID,
    OmniSchemaMeta,
    OmniSchemaSpec,
    SchemaKey,
    SchemaValue,
    View,
    ViewTypes,
    OmniFormID,
    OmniFormTypes
} from '../base';
import widgetStore from "../stores/widget-store"
import schemaStore from "../stores/omni-schemas"
let ulid = require("ulid")

/*
 Builder, creates a omiform from a omnischema
 */



export class TableView implements View {
    id: OmniFormID
    name: string
    @observable opened: boolean
    @computed get valid(): boolean {
        return true
    }

    renderer: React.StatelessComponent<ITableProps>;
    props: ITableProps


    constructor(id: OmniFormID) {
        this.id = id
        this.opened = true
    }
}

export class UnionView implements View {
    renderer: React.StatelessComponent<IUnionProps>;
    props: IUnionProps
    name: string
    id: OmniFormID
    @observable opened: boolean
    @computed get valid(): boolean {
        return true
    }
    @computed get selectedTable(): OmniFormID {
        return
    }
    constructor(id: OmniFormID) {
        this.id = id
        this.opened = true

    }

}
function toHuman(cc: string): string {
    return cc.replace(/([a-z](?=[A-Z]))/g, '$1 ')
}

export class OmniForm {
    id: OmniFormID
    @observable currentView: OmniFormID

    @action setView(id: OmniFormID) {
        this.currentView = id
    }

    constructor(id: OmniFormID) {
        this.id = id
    }

}
export class OmniFormStore {
    objects: HashMap<OmniFormID, any>
    counter: number;
    constructor() {
        this.objects = new HashMap<OmniFormID, any>()
        this.counter = 0
    }
    omn3id() {
        this.counter += 1
        return this.counter
    }

    renderTableFields(fields: OmniField[], parent: OmniSchema, fieldName: string, parentFormId: OmniFormID) {
        //create fields
        //create remain fields
        for (let field of fields) {
            if (field.schema.isContainer()) {
                this.build(schemaStore.get(field.schema), parent, field.name, parentFormId)
            } else {
                //inline
                let fk = new SchemaKey({ realm: 'Inline', schema: field.schema, items: field.items, scope: parent.id, fieldName: field.name })
                let fv = widgetStore.get(fk)
                let fId = new OmniFormID([OmniFormTypes.Field, this.omn3id()], parentFormId)
                //create field
                let formField = new FormField<any>(fId, fv.initial)
                formField.required = field.required
                formField.help = field.description
                formField.label = toHuman(field.name).toLowerCase()
                formField.name =field.name

                let props = Object.assign(fv.props || {}, { field: formField })
                //create inline 
                let fi: FieldInline = { id: fId, renderer: observer(fv.renderer), props: props }
                this.objects.set(fi.id, fi)
            }
        }
    }


    //TODO: end builder
    //TODO: Create decorator
    build(os: OmniSchema, parent?: OmniSchema, fieldName?: string, parentFormId?: OmniFormID): OmniForm | void {
        if (!os) {
            throw new Error("OmniSchema should not be null");
        }

        if (!os.id.isContainer()) {
            throw new Error("Only Tables, Unions and Resources can be use as schema for create omniforms");
        }
        if (parent) {
            if (!parent.id.isContainer()) {
                throw new Error("Only Tables, Unions and Resources can be use as parent");
            }
        }

        let kv: SchemaKey;
        let sv: SchemaValue;
        switch (os.id.coreType) {
            case CoreTypes.Table:
            case CoreTypes.Resource:
                let omniForm: OmniForm
                let tvId: OmniFormID
                if (!parent) {
                    let oId = new OmniFormID([OmniFormTypes.Form, this.omn3id()])
                    //create form
                    omniForm = new OmniForm(oId)
                    tvId = new OmniFormID([OmniFormTypes.Table, this.omn3id()], oId)
                    omniForm.setView(tvId)
                }
                else {
                    tvId = new OmniFormID([OmniFormTypes.Table, this.omn3id()], parentFormId)
                }

                kv = new SchemaKey({ realm: "View", schema: os.id, scope: parent ? parent.id : null, fieldName: fieldName })
                sv = widgetStore.get(kv)
                //create table view
                let tv = new TableView(tvId)
                tv.name = fieldName ? toHuman(fieldName) : toHuman(os.spec.meta.name)
                this.objects.set(tv.id, tv)
                tv.renderer = observer(sv.renderer)
                tv.props = Object.assign(tv.props || {}, sv.props || {})
                this.renderTableFields(os.spec.fields, os, fieldName, tvId)
                return omniForm
            case CoreTypes.Union:
                let uId = new OmniFormID([OmniFormTypes.Union, this.omn3id()], parentFormId)
                let uv = new UnionView(uId)
                uv.name = toHuman(fieldName)

                this.objects.set(uv.id, uv)

                kv = new SchemaKey({ realm: "View", schema: os.id, scope: parent ? parent.id : null, fieldName: fieldName })
                sv = widgetStore.get(kv)
                uv.renderer = sv.renderer
                uv.props = Object.assign(uv.props || {}, sv.props || {})
                for (let tableSchemaID of os.spec.schemas) {
                    let tableSchema = schemaStore.get(tableSchemaID)
                    kv = new SchemaKey({ realm: "View", schema: tableSchema.id, scope: parent ? parent.id : null, fieldName: fieldName })
                    sv = widgetStore.get(kv)
                    let tId = new OmniFormID([OmniFormTypes.Table, this.omn3id()], uId)
                    let tv = new TableView(tId)
                    this.objects.set(tv.id, tv)

                    tv.renderer = sv.renderer
                    tv.props = Object.assign(tv.props || {}, sv.props || {})
                    this.renderTableFields(tableSchema.spec.fields, os, fieldName, tId)
                }
        }
    }

}

export default new OmniFormStore()