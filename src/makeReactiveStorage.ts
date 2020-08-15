import { reactive, toRaw } from 'vue'
import { Constructor, Storage, Attributes } from '@opaquejs/opaque'

export default <T extends Constructor<Storage>>(base: T) => class VueReactive extends base {

    constructor(...args: any[]) {
        super(...args)
        this.replace(reactive(this.all()))
    }

    public all() {
        return toRaw(super.all()).map(document => toRaw(document))
    }

}