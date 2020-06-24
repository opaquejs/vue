import { Model } from '@opaquejs/opaque'
import VueInstance from 'vue'
import { makeReactiveQuery } from '.'
import hasVue from './hasVue'

type Constructor<T = {}> = new (...args: any[]) => T

export default <T extends Constructor<Model> & typeof Model>(base: T) => class VueReactiveModel extends hasVue(base) {

    protected static $query = makeReactiveQuery(base.$query)

    static install(Vue: typeof VueInstance) {
        this.Vue = Vue
        this.$query.install(Vue)
    }

    setAttribute<T extends unknown>(attribute: string, value: T) {
        return (this.constructor as typeof VueReactiveModel).Vue.set(this.$attributes.local, attribute, value)
    }

    constructor(...args: any[]) {
        super(...args)
    }

}