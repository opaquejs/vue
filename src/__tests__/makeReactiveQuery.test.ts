import { makeReactiveQuery } from ".."
import { MappedQuery } from "@opaquejs/opaque"
import { watch } from "vue";
import { sleep } from "../util";

describe('Vue', () => {
    test('Can extend Model', async () => {
        class VueReactiveQuery<A, B> extends makeReactiveQuery(MappedQuery)<A, B> {

        }

        const data: { value: string }[] = [];
        const query = new VueReactiveQuery(data, () => true, o => o, m => m)

        const values: any[] = []
        const stop = watch(query.get(), value => values.push(value.length))

        data.push({ value: 'hallo' })
        query.refresh()
        await sleep(10)

        data.push({ value: 'hallo again' })
        query.refresh()
        await sleep(10)

        expect(values).toEqual([ 1, 2 ])
    })
})