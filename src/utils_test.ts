import { merge } from "./utils";
import { Heapq } from "./heapq";
import { expect } from "chai";

describe("heapq utils", () => {
    it("merge", () => {
        const a = [3, 2, 1];
        const b = [4, 1, 5];
        const c = [8, 0, 3];
        const heap: Heapq<number> = merge<number>((a, b) => a > b, a, b, c);

        expect(heap.top() === 0);
        expect(heap.pop() === 0);
        expect(heap.top() === 1);
    });

    it("merge with custom comparator", () => {
        const a = [3, 2, 1];
        const b = [4, 1, 5];
        const c = [8, 0, 3];
        const heap: Heapq<number> = merge<number>((a, b) => a < b, a, b, c);

        expect(heap.top() === 8);
        expect(heap.pop() === 8);
        expect(heap.top() === 5);
    });
});
