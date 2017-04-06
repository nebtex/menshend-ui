import { HashMap, OmniSchema, OmniSchemaID, SchemaValue, SchemaKey } from '../base';

class WidgetStore extends HashMap<SchemaKey, SchemaValue> {

    set(key: SchemaKey, value: SchemaValue) {
        if (key.realm == "Inline") {
            if (key.schema.isTable() || key.schema.isResource() || key.schema.isUnion()) {
                throw new Error("Inline render can't be use for tables, unions, or resources");
            }
        } else {

            if (!(key.schema.isTable() || key.schema.isResource() || key.schema.isUnion())) {
                throw new Error("View render only can be use for tables, unions, or resources");
            }
        }
        super.set(key, value)
    }

    /*
     getRenderer
     receive a schema key an try to get the renderer function register for it
     1. look at the view scope
     2. if there is not a definition at the view scope, then search at the app scope
     3. if the above search fail then look at the global scope
     */
    //TODO: test be sure that the values are merge from field scope to global scope, where field has the
    // highest priority, then view scope, then admin scope, then global
    get(key: SchemaKey): SchemaValue {
        let sv = new SchemaValue();
        //★ core scope
        if (key.coreKey()) {
            sv.merge(super.get(key.coreKey()));
        }

        //★ global scope
        sv.merge(super.get(key.globalKey()));

        if (key.scope) {
            //★ application scope
            sv.merge(super.get(key.applicationKey()));

            //★ field scope
            //field scope only works if the full schema and scope are defined
            if (key.scope.isUserDefined()) {
                //★ view scope
                if (key.viewKey()) {
                    sv.merge(super.get(key.viewKey()));
                }
                if (key.fieldName) {
                    sv.merge(super.get(key));
                }

            }
        }
        return sv
    }
}
// widget store allow to registry widget per schemas
export default new WidgetStore()


