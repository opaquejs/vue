import { reactive } from 'vue'
import { IdentifiableStorageAdapter } from '@opaquejs/opaque'

type Constructor<T = {}> = new (...args: any[]) => T


export default <T extends Constructor<IdentifiableStorageAdapter>>(base: T) => class VueReactiveAdapter extends base {

    constructor(...args: any[]) {
        super(...args)
        this.data = reactive(this.data)
    }

}