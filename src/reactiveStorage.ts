import { Constructor } from '@opaquejs/opaque'
import { reactive } from 'vue'

export const reactiveStorage = <T extends Constructor<{ storage: Map<unknown, unknown> }>>(base: T) => class ReactiveAdapter extends base {

    constructor(...args: any[]) {
        super(...args)
        this.storage = reactive(this.storage)
    }

}