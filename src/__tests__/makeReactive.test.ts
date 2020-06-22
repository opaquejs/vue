import { makeReactive } from ".."
import { Model } from "@opaquejs/opaque"

describe('Vue', () => {
    test('Can extend Model', () => {
        class Task extends makeReactive(Model) {

        }

        expect(Task.install).toBeInstanceOf(Function)
    })
})