import { Model, Constructor } from '@opaquejs/opaque'
import { makeReactiveQuery } from '.'
import { reactive } from 'vue'
import makeReactiveStorage from './makeReactiveStorage'

export default <T extends Constructor<Model> & typeof Model>(base: T) => class VueReactiveModel extends base {

    protected static $query = makeReactiveQuery(base.$query)
    // protected static storage = makeReactiveStorage(base.storage);

    constructor(...args: any[]) {
        super(...args)
        this.$ensureReactivity()
    }

    $ensureReactivity() {
        this.$attributes.local = reactive(this.$attributes.local)
    }

}