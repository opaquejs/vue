import { reactive } from 'vue'
import { IdentifiableStorage } from '@opaquejs/opaque'

type Constructor<T = {}> = new (...args: any[]) => T


export default <T extends Constructor<IdentifiableStorage>>(base: T) => class VueReactive extends base {

    constructor(...args: any[]) {
        super(...args)
        this.data = reactive(this.data)
    }

}