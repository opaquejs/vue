import { shallowReactive } from 'vue'
import { Constructor } from '@opaquejs/opaque'

export default <T extends Constructor<{ results: any[], mapped: any[] }>>(base: T) => class VueReactiveQuery extends base {

    constructor(...args: any[]) {
        super(...args)
        this.results = shallowReactive(this.results)
        this.mapped = shallowReactive(this.mapped)
    }

}