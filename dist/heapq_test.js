"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heapq_1 = require("./heapq");
var chai_1 = require("chai");
var heap;
describe("Heapq", function () {
    beforeEach(function () {
        heap = new heapq_1.Heapq();
    });
    it("Should just work", function () {
        for (var i = 0; i < 100; i++) {
            heap.push(Math.random());
        }
        var result = [];
        for (var i = 0; i < 100; i++) {
            result.push(heap.pop());
        }
        for (var i = 1; i < 100; i++) {
            chai_1.expect(result[i - 1] <= result[i]);
        }
    });
    it("Should return minimal element", function () {
        heap.push(8);
        heap.push(9);
        heap.push(11);
        heap.push(1);
        chai_1.expect(heap.top() === 1);
        heap.push(-1);
        chai_1.expect(heap.top() === -1);
    });
    it("Should be able to use comparator", function () {
        var maxHeap = new heapq_1.Heapq([], function (a, b) { return a > b; });
        maxHeap.push(8);
        maxHeap.push(9);
        maxHeap.push(11);
        maxHeap.push(1);
        chai_1.expect(maxHeap.top() === 11);
        maxHeap.push(15);
        chai_1.expect(maxHeap.top() === 15);
    });
});
//# sourceMappingURL=heapq_test.js.map