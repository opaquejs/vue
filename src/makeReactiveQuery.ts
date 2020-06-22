import VueInstance from 'vue'
import hasVue from './hasVue'

type Constructor<T = {}> = new (...args: any[]) => T

export default <T extends Constructor<{ results: any[], mapped: any[] }>>(base: T) => class VueReactiveQuery extends hasVue(base) {

    static install(Vue: typeof VueInstance) {
        this.Vue = Vue
    }

    constructor(...args: any[]) {
        super(...args)
        if(!(this.constructor as typeof VueReactiveQuery).Vue) {
            throw new Error('Vue query needs to be booted with Vue')
        }
        this.results = (this.constructor as typeof VueReactiveQuery).Vue.observable({ data: this.results }).data
        this.mapped = (this.constructor as typeof VueReactiveQuery).Vue.observable({ data: this.mapped }).data
    }

}