import omniFormStore, { OmniForm } from '../omniform/io.omniql.core/Builder';
import adminStore from '../../stores/editServiceFormStore'
import {
    CoreTypes,
    OmniDescription,
    OmniField,
    OmniFormID,
    OmniSchema,
    OmniSchemaID,
    SchemaKey,
    SchemaValue,
    Table
} from '../omniform/base';
import String from '../omniform/io.omniql.core/String';
import Enum from '../omniform/io.omniql.core/Enum';
import Boolean from '../omniform/io.omniql.core/Boolean';
import Integer from '../omniform/io.omniql.core/Integer';
import TableWidget from '../omniform/io.omniql.core/Table';
import Union from '../omniform/io.omniql.core/Union';
import Code from '../omniform/io.omniql.core/Code';

import StringVector from '../omniform/io.omniql.core/StringVector';
import { OmniExplorer, ViewContainer } from '../omniform/io.omniql.core/OmniExplorer';
import { observer } from 'mobx-react'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container } from 'reactstrap';
import schemaStore from "../omniform/stores/omni-schemas"
import widgetStore from "../omniform/stores/widget-store"
import { Form, Row, Col, Modal } from 'reactstrap';


function registerOmniSchema(obj: any): OmniSchema {
    let schema: OmniSchema = {};
    switch (obj.kind) {
        case "Resource":
        case "Table":
            schema.api = obj.api;
            if (obj.kind == "Table") {
                schema.kind = CoreTypes.Table
            } else {
                schema.kind = CoreTypes.Resource
            }
            schema.spec = {
                meta: {
                    application: obj.spec.meta.application,
                    description: obj.spec.meta.description,
                    name: obj.spec.meta.name
                },
                fields: []
            }
            schema.id = new OmniSchemaID(schema.spec.meta.application, [schema.kind, schema.spec.meta.name])
            if (obj.spec.fields) {
                for (let field of obj.spec.fields) {
                    let newField: OmniField = new OmniField()
                    newField.name = field.name;
                    newField.schema = OmniSchemaID.fromString(field.schema);
                    newField.items = field.items ? OmniSchemaID.fromString(field.items) : null;
                    newField.description = field.description as OmniDescription;
                    newField.required = field.required ? field.required : false;
                    schema.spec.fields.push(newField)
                }
            }
            break
        case "Union":
            schema.api = obj.api;
            schema.kind = CoreTypes.Union
            schema.spec = {
                meta: {
                    application: obj.spec.meta.application,
                    description: obj.spec.meta.description,
                    name: obj.spec.meta.name
                },
                schemas: [] as OmniSchemaID[]
            }
            schema.id = new OmniSchemaID(schema.spec.meta.application, [schema.kind, schema.spec.meta.name])

            for (let schemaName of obj.spec.schemas) {
                schema.spec.schemas.push(OmniSchemaID.fromString(schemaName))
            }
            break
        default:
            console.log(obj.kind, obj)
            throw new Error("Object kind dont recognized")
    }
    return schema
}

let schema = registerOmniSchema(require('./resources/AdminService.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/Cache.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/Cors.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/LongDescriptionLocal.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/LongDescriptionRemote.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/LuaResolver.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/Metadata.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/PortForward.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/Proxy.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/Redirect.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/tables/YAMLResolver.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/unions/Strategy.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/unions/Resolver.json'));
schemaStore.set(schema.id, schema)
schema = registerOmniSchema(require('./resources/unions/LongDescription.json'));
schemaStore.set(schema.id, schema)

//register basic renderers globally
//string
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String") }), new SchemaValue(String, ""));
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/Boolean") }), new SchemaValue(Boolean, false));
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/Enum") }), new SchemaValue(Enum, 0));
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/Integer") }), new SchemaValue(Integer, 0));
widgetStore.set(new SchemaKey({ realm: 'View', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/Table") }), new SchemaValue(TableWidget));
widgetStore.set(new SchemaKey({ realm: 'View', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/Union") }), new SchemaValue(Union));
widgetStore.set(new SchemaKey({ realm: 'View', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/Resource") }), new SchemaValue(TableWidget));
widgetStore.set(new SchemaKey({
    realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/Vector"),
    items: OmniSchemaID.fromString("io.omniql.core.v1alpha/String")
}), new SchemaValue(StringVector, []));
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String") , scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/LuaResolver"),  fieldName:"content"}), new SchemaValue(Code, ""));



let generated = new SchemaValue()
generated.props = {generated: true}

widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Resource/AdminService"),  fieldName:"fullUrl"}), generated);
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/Metadata"),  fieldName:"id"}), generated);
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/LongDescriptionRemote"),  fieldName:"content"}), generated);

let metadataRows = new SchemaValue()
metadataRows.props = {rows: [["roleId", "subDomain"]]}
widgetStore.set(new SchemaKey({ realm: 'View', schema: OmniSchemaID.fromString("io.menshend.v1alpha/Table/Metadata")}), metadataRows);




let required = new SchemaValue()
required.props = {required: true}
let textArea = new SchemaValue()
textArea.props = {textArea: true}
let image = new SchemaValue()
image.props = {image: true}
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/Metadata"),  fieldName:"roleId"}), required);
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/Metadata"),  fieldName:"subDomain"}), required);


widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/Metadata"),  fieldName:"description"}), textArea);
widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/LongDescriptionLocal"),  fieldName:"content"}), textArea);

widgetStore.set(new SchemaKey({ realm: 'Inline', schema: OmniSchemaID.fromString("io.omniql.core.v1alpha/String"), scope:OmniSchemaID.fromString("io.menshend.v1alpha/Table/Metadata"),  fieldName:"logo"}), image);


export const adminForm = omniFormStore.build(schemaStore.get(OmniSchemaID.fromString("io.menshend.v1alpha/Resource/AdminService"))) as OmniForm
adminStore.omniForm = adminForm
/*

@observer
export class ModalContent extends React.Component<{}, {}> {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs="3">
                        <OmniExplorer omniForm={omniForm} on={{ itemClick: function (id: OmniFormID) { omniForm.setView(id); } }} />
                    </Col>
                    <Col>
                        <ViewContainer id={omniForm.currentView}></ViewContainer>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export class ServiceEditModal extends React.Component<{}, {}>{

}
*/