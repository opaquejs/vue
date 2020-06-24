import { makeReactiveQuery } from ".."
import { MappedQuery } from "@opaquejs/opaque"

describe('Vue', () => {
    test('Can extend Model', () => {
        class VueReactiveQuery<A, B> extends makeReactiveQuery(MappedQuery)<A, B> {

        }

        expect(VueReactiveQuery.install).toBeInstanceOf(Function)
        expect(() => new VueReactiveQuery([], () => true, () => {}, () => {})).toThrow()
    })
})