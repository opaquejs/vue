import { Model, Attributes } from '@opaquejs/opaque'
import { makeReactiveQuery } from '.'
import { reactive, isReactive, toRefs, toRef } from 'vue'

type Constructor<T = {}> = new (...args: any[]) => T

export default <T extends Constructor<Model> & typeof Model>(base: T) => class VueReactiveModel extends base {

    protected static $query = makeReactiveQuery(base.$query)

    constructor(...args: any[]) {
        super(...args)
        this.$attributes.local = reactive(this.$attributes.local)
    }

}