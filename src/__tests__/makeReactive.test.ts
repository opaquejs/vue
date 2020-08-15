import { makeReactive } from ".."
import { Model, attribute } from "@opaquejs/opaque"
import { watch } from 'vue'
import { sleep } from "../util"

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

    test('storage', async () => {
        const task = await Task.create({ title: 'test', id: 1 })
        const copy = await Task.find(1)

        let last_title = copy.title
        watch(() => copy.title, value => last_title = value)

        task.title = 'updated'
        await task.save()

        sleep(10)

        expect(last_title).toBe('updated')
    })
})