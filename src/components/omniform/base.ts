import { observable, IObservableValue } from 'mobx';

export enum CoreTypes {
    Vector = 1,
    String,
    Table,
    Resource,
    Union,
    Boolean,
    Integer,
    Application
}
export interface View {
    id: OmniFormID
    name: string
    opened: boolean
    valid: boolean

}
export enum ValidationState {
    VALID,
    INVALID,
    NONE
}
export interface IFormField<T> {
    id: string
    label: string
    name?: string
    placeholder?: string
    value: T
    valid: ValidationState //if is not present ignore
    help?: { short?: string, long?: string }
    validate?: { (value: T): { valid: ValidationState, error?: string } }
    required?: boolean
    disabled?: boolean
    error?: string //if is not present means that there is not errors
    on: {
        change: { (value: T): void },
        validate?: { (): void },
    }
}
export class FormField<T> implements IFormField<T>{
    $omni: OmniField
    id: string
    otherId: OmniFormID
    name?: string
    label: string
    placeholder?: string
    @observable value: T
    @observable valid: ValidationState //if is not present ignore
    help?: OmniDescription
    validate?: { (value: T): { valid: ValidationState, error?: string } }
    required?: boolean
    disabled?: boolean
    @observable error: string //if is not present means that there is not errors
    on: {
        change: { (value: T): void },
        validate: { (): void },
    }

    constructor(id: OmniFormID, initial?: T) {
        this.id = id.hash()
        this.otherId = id
        this.value = initial

        this.valid = ValidationState.NONE;
        this.on = {
            change: (nv: T) => {
                console.log(nv)
                this.value = nv
            },
            validate: () => {
                if (this.validate) {
                    const result = this.validate(this.value)
                    this.valid = result.valid
                    this.error = result.error
                }
            }
        }
    }
}

export type ViewTypes = CoreTypes.Table | CoreTypes.Resource;

export interface OmniDescription {
    short?: string
    long?: string
}

export interface OmniSchemaMeta {
    application: string
    name: string
    description?: OmniDescription
}

export class OmniField {
    name: string
    schema: OmniSchemaID
    items: OmniSchemaID
    description?: OmniDescription
    required?: boolean

    /*
    * Creates a form field from the OmniField
    */
    formField(initial: any): FormField<any> {
        let ff = new FormField<any>(initial);
        ff.label = this.name;
        ff.required = this.required;
        ff.help = this.description;
        ff.$omni = this;
        return ff
    }
}



export interface OmniSchemaSpec {
    meta: OmniSchemaMeta
    fields?: OmniField[]
    schemas?: OmniSchemaID[]

}


export interface TableSpec extends OmniSchemaSpec {
    fields: OmniField[]
}

export interface ResourceSpec extends OmniSchemaSpec {
    fields: OmniField[]
}

export interface UnionSpec extends OmniSchemaSpec {
    schemas: OmniSchemaID[]
}

export interface OmniSchema {
    api?: string
    id?: OmniSchemaID
    kind?: CoreTypes
    spec?: OmniSchemaSpec
}


export interface Table extends OmniSchema {
    kind: CoreTypes.Table
    spec: TableSpec
}

export interface Resource extends OmniSchema {
    kind: CoreTypes.Resource
    spec: ResourceSpec
}

export interface Union extends OmniSchema {
    kind: CoreTypes.Union
    spec: UnionSpec
}


/*
 example
 {kind: Resource, api: io.example.v1, name: Accounts}
 */
export class OmniSchemaID {
    path?: (CoreTypes | string)[];
    application: string;
    private _hash: string;

    constructor(application: string, path?: (CoreTypes | string)[]) {
        this.application = application
        this.path = path
    }
    static fromString(str: string): OmniSchemaID {
        let res = str.split("/");
        if ((res.length - 1) % 2 != 0) {
            res.push("")
        }
        let path = []
        let app: string

        while (res.length > 0) {
            path.push(res.pop())
            path.push(CoreTypes[res.pop() as keyof typeof CoreTypes])
            if (res.length == 1) {
                app = res.pop()
            }
        }
        path.reverse()
        return new OmniSchemaID(app, path)


    }
    hash(): string {

        if (this._hash) {
            return this._hash
        }

        this._hash = this.application;
        if (this.isApplication()) {
            return this._hash
        }

        for (let item of this.path) {
            if (typeof item === "string") {
                if (item == "") {
                    continue
                }
                this._hash += "/" + item;
            } else {
                this._hash += "/" + CoreTypes[item as CoreTypes]
            }
        }
        return this._hash;
    }

    is(coreType: CoreTypes): boolean {

        return this.coreType == coreType;
    }
    get coreType(): CoreTypes {
        if (this.path) {
            return this.path[this.path.length - 2] as CoreTypes

        }
        return CoreTypes.Application
    }

    isString(): boolean {
        return this.is(CoreTypes.String);
    }

    isTable(): boolean {
        return this.is(CoreTypes.Table);
    }

    isUnion(): boolean {
        return this.is(CoreTypes.Union);
    }

    isResource(): boolean {
        return this.is(CoreTypes.Resource);
    }

    isVector(): boolean {
        return this.is(CoreTypes.Vector);
    }

    isApplication(): boolean {
        return this.is(CoreTypes.Application);
    }
    isContainer(): boolean {
        return this.isResource() || this.isUnion() || this.isTable()
    }

    /*
     user defined schemas
     /Table/xxxx
     /Resource/xxxx
     */
    isUserDefined(): boolean {
        if (this.isApplication()) {
            return false
        }
        return this.path[this.path.length - 1] != ""
    }
}

export interface ObjectWithHash {
    hash(): string
}

export class HashMap<K extends ObjectWithHash, V> {
    private internalMap: Map<string, V>;
    private keyMap: Map<string, K>;

    constructor() {
        this.internalMap = new Map<string, V>();
        this.keyMap = new Map<string, K>();
    }

    set(key: K, value: V) {
        this.internalMap.set(key.hash(), value);
        this.keyMap.set(key.hash(), key);
    }

    get(key: K): V {
        return this.internalMap.get(key.hash());
    }

    clear() {
        this.internalMap.clear();
        this.keyMap.clear();
    }

    has(key: K): boolean {
        return this.internalMap.has(key.hash())
    }

    get size(): number {
        return this.internalMap.size;
    }

    values(): IterableIterator<V> {
        return this.internalMap.values()
    }

    delete(key: K) {
        this.internalMap.delete(key.hash());
        this.keyMap.delete(key.hash());
    }
}


export type RealmTypes = "Inline" | "View";


export class SchemaKey {
    schema: OmniSchemaID;
    items: OmniSchemaID;
    realm: RealmTypes;
    fieldName?: string;
    //if not scope is defined the builder will use the definition in the global scope
    scope?: OmniSchemaID;
    private __hash: string;

    constructor(ops: { realm: RealmTypes, schema: OmniSchemaID, items?: OmniSchemaID, scope?: OmniSchemaID, fieldName?: string }) {

        if (ops.scope) {
            if (!(ops.scope.isUnion() || ops.scope.isTable() || ops.scope.isResource() || ops.scope.isApplication())) {
                throw Error("only tables and resources can be used as scope");
            }
            this.scope = ops.scope
        }
        this.fieldName = ops.fieldName
        this.realm = ops.realm;
        this.schema = ops.schema;
        this.items = ops.items;

    }

    viewKey(): SchemaKey {
        if (this.scope && this.scope.isUserDefined()) {
            return new SchemaKey({ realm: this.realm, schema: this.schema, scope: this.scope, items: this.items });
        }
        return null;
    }

    applicationKey(): SchemaKey {
        if (this.scope) {
            let scope = new OmniSchemaID(this.scope.application);
            return new SchemaKey({ realm: this.realm, schema: this.schema, scope: scope, items: this.items })
        }
        return null;
    }

    globalKey(): SchemaKey {
        return new SchemaKey({ realm: this.realm, schema: this.schema, items: this.items })
    }

    coreKey(): SchemaKey {
        if (this.schema.isContainer()) {
            let schema = OmniSchemaID.fromString(`io.omniql.core.v1alpha/${CoreTypes[this.schema.coreType]}`)
            return new SchemaKey({ realm: this.realm, schema: schema })
        }
        return null;
    }

    hash(): string {
        if (this.__hash) {
            return this.__hash
        }
        this.__hash = this.calculateHash()
        return this.__hash;
    }

    /*calculate the key hash*/
    private calculateHash(): string {
        let hash: string = this.realm + "✌" + this.schema.hash();

        if (this.items) {
            hash += "♥" + this.items.hash()
        }
        if (this.scope) {
            hash += "☢" + this.scope.hash()
        }
        if (this.scope) {

            if (this.scope.isUserDefined()) {
                if (this.fieldName) {
                    hash += "★" + this.fieldName
                }
            }
        }
        return hash
    }
}


export interface IRendererProps<T> {
    field?: IFormField<T>
    theme?: any
}

export interface IRenderer<T> extends React.StatelessComponent<IRendererProps<T>> { }

export class SchemaValue {
    renderer: any;
    props: {};
    initial: any;

    constructor(renderer?: any, initial?: any, props?: any) {
        this.renderer = renderer;
        this.initial = initial;

        this.props = props ? props : {};
    }

    merge(other: SchemaValue) {
        if (!other) {
            return
        }
        if (other.renderer) {
            this.renderer = other.renderer
        }
        if (other.initial) {
            this.initial = other.initial
        }
        if (other.props) {
            this.props = Object.assign(this.props, other.props)

        }
    }
}
export enum OmniFormTypes {
    Form,
    Table,
    Union,
    Field
}

export class OmniFormID {
    parent?: OmniFormID
    id: [OmniFormTypes, number]
    children: OmniFormID[]
    private _hash: string
    constructor(objectID: [OmniFormTypes, number], parent?: OmniFormID) {
        this.children = []
        this.parent = parent
        this.id = objectID
        if (this.parent) {

            this.parent.children.push(this)
        }
    }
    isTable(): boolean {
        return this.id[0] == OmniFormTypes.Table
    }
    isUnion(): boolean {
        return this.id[0] == OmniFormTypes.Union
    }

    hash() {
        if (this._hash) {
            return this._hash
        }
        this._hash = ""
        if (this.parent) {
            this._hash += this.parent.hash() + "/"
        }
        this._hash += this.id.join("/")
        return this._hash
    }

}

export interface Inline {
}

export interface FieldInline extends Inline {
    id: OmniFormID
    renderer: IRenderer<any>;
    props: IRendererProps<any>
}



export interface ITableProps {
    theme?: any;
    help?: OmniDescription
    name?: string
    widgetMap?: Map<string, FieldInline>
}


export interface IEnumProps extends IRendererProps<number> {
    options: string[]
}

export interface IUnionProps {
    selector?: { renderer: React.StatelessComponent<IEnumProps>, props: IEnumProps },
    tables?: { renderer: React.StatelessComponent<ITableProps>, props: ITableProps }[]
    theme?: any
}