import { Model } from '@opaquejs/opaque'
import { makeReactiveQuery } from '.'
import { reactive } from 'vue'
import makeReactiveAdapter from './makeReactiveAdapter'

type Constructor<T = {}> = new (...args: any[]) => T

export default <T extends Constructor<Model> & typeof Model>(base: T) => class VueReactiveModel extends base {

    protected static $query = makeReactiveQuery(base.$query)
    protected static adapter = makeReactiveAdapter(base.adapter);

    constructor(...args: any[]) {
        super(...args)
        this.$ensureReactivity()
    }

    $ensureReactivity() {
        this.$attributes.local = reactive(this.$attributes.local)
    }

}