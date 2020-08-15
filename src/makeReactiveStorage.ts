import { reactive, toRaw } from 'vue'
import { Constructor, Storage, Attributes } from '@opaquejs/opaque'

export default <T extends Constructor<Storage>>(base: T) => class VueReactive extends base {

    constructor(...args: any[]) {
        super(...args)
        reactive(this.all())
    }

    public all() {
        return reactive(super.all())
    }

}