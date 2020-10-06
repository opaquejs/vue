import { OpaqueModel, Constructor, ModelAttributes } from '@opaquejs/opaque'
import { reactive as vuereactive } from 'vue'
import { reactiveStorage } from './reactiveStorage'

export const reactive = <T extends Constructor<OpaqueModel> & { $adapterConstructor: Constructor<{ storage: Map<unknown, unknown> }> }>(base: T) => class VueReactiveModel extends base {
    static $adapterConstructor = reactiveStorage(base.$adapterConstructor)

    constructor(...args: any[]) {
        super()
        this.$ensureReactivity()
    }

    $ensureReactivity() {
        this.$attributes.local = vuereactive(this.$attributes.local) as Partial<ModelAttributes<this>>
    }

}