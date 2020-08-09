import { reactive } from 'vue'
import { Constructor, Storage } from '@opaquejs/opaque'

export default <T extends Constructor<Storage>>(base: T) => class VueReactive extends base {

    constructor(...args: any[]) {
        super(...args)
        this.replace(reactive(this.all()))
    }

}