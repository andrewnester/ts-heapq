import { Heapq } from "./heapq";
import { expect } from "chai";

let heap: Heapq<number>;

describe("Heapq", () => {
    beforeEach(() => {
        heap = new Heapq<number>();
    });

    it("Should just work", () => {
        for (let i: number = 0; i < 100; i++) {
            heap.push(Math.random());
        }

        let result: Array<number> = [];
        for (let i: number = 0; i < 100; i++) {
            result.push(heap.pop());
        }

        for (let i: number = 1; i < 100; i++) {
            expect(result[i - 1] <= result[i]);
        }
    });

    it("Should return minimal element", () => {
        heap.push(8);
        heap.push(9);
        heap.push(11);
        heap.push(1);
        expect(heap.top() === 1);

        heap.push(-1);
        expect(heap.top() === -1);

    });

    it("Should be able to use comparator", () => {
        let maxHeap: Heapq<number> = new Heapq<number>([], (a: number, b: number) =>  a > b);
        maxHeap.push(8);
        maxHeap.push(9);
        maxHeap.push(11);
        maxHeap.push(1);
        expect(maxHeap.top() === 11);

        maxHeap.push(15);
        expect(maxHeap.top() === 15);

    });

    test('should handle zero correctly', () => {
        heap.push(5);
        heap.push(3);
        heap.push(0);

        expect(heap.pop()).to.equal(0);
        expect(heap.pop()).to.equal(3);
        expect(heap.pop()).to.equal(5);
    });

    test('should handle multiple zeros correctly', () => {
        heap.push(0);
        heap.push(0);
        heap.push(0);

        expect(heap.pop()).to.equal(0);
        expect(heap.pop()).to.equal(0);
        expect(heap.pop()).to.equal(0);
    });
});
