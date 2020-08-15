import { reactive, toRaw } from 'vue'
import { Constructor, Storage, Attributes } from '@opaquejs/opaque'

export default <T extends Constructor<Storage>>(base: T) => class VueReactive extends base {

    public all() {
        return reactive(super.all())
    }

}