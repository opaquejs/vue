import { makeReactive } from ".."
import { Model, attribute } from "@opaquejs/opaque"
import { watch } from 'vue'

export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

describe('Vue', () => {
    class Task extends makeReactive(Model) {
        @attribute()
        public title: string = 'standard'

        constructor() {
            super()
        }

        get startsWithT() {
            return this.title.startsWith('T')
        }
    }
    test('Classic attributes', async () => {
        const task = new Task()

        let changed = ''
        // console.log(typeof task.$attributes.local)
        const stop = watch(() => task.title, value => changed = value)
        task.title = 'new title'
        await sleep(1)
        expect(changed).toBe(task.title)
        stop()
    })

    test('getters', async () => {
        const task = new Task()

        const values: any[] = []
        const stop = watch(() => task.startsWithT, value => values.push(value))

        task.title = 'n'
        await sleep(10)
        
        task.title = 'T'
        await sleep(10)

        task.title = 'not'
        await sleep(10)

        expect(values).toEqual([ true, false ])
        stop()
    })
})