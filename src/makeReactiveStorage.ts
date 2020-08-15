import { reactive, toRaw } from 'vue'
import { Constructor, Storage, Attributes } from '@opaquejs/opaque'

export default <T extends Constructor<Storage>>(base: T) => class VueReactive extends base {

    protected raw: Attributes<number>[]

    constructor(...args: any[]) {
        super(...args)
        this.raw = super.all()
        this.replace(reactive(this.all()))
    }

    public all() {
        return this.raw
    }

}