import VueInstance from 'vue'

type Constructor<T = {}> = new (...args: any[]) => T

export default <T extends Constructor<{ }>>(base: T) => class HasVue extends base {
    protected static _Vue: null | typeof VueInstance = null
    static get Vue(): typeof VueInstance {
        if(this._Vue == null) {
            throw new Error('You need to install the Vue model in order to use it with Vue!')
        }
        return this._Vue
    }
    static set Vue(Vue: typeof VueInstance) {
        this._Vue = Vue
    }

    constructor(...args: any[]) {
        super(...args)
    }
}