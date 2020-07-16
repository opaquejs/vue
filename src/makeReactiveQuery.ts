import { reactive, shallowReactive } from 'vue'

type Constructor<T = {}> = new (...args: any[]) => T

export default <T extends Constructor<{ results: any[], mapped: any[] }>>(base: T) => class VueReactiveQuery extends base {

    constructor(...args: any[]) {
        super(...args)
        this.results = shallowReactive(this.results)
        this.mapped = shallowReactive(this.mapped)
    }

}