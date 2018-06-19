"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var chai_1 = require("chai");
describe("heapq utils", function () {
    it("merge", function () {
        var a = [3, 2, 1];
        var b = [4, 1, 5];
        var c = [8, 0, 3];
        var heap = utils_1.merge(function (a, b) { return a > b; }, a, b, c);
        chai_1.expect(heap.top() === 0);
        chai_1.expect(heap.pop() === 0);
        chai_1.expect(heap.top() === 1);
    });
    it("merge with custom comparator", function () {
        var a = [3, 2, 1];
        var b = [4, 1, 5];
        var c = [8, 0, 3];
        var heap = utils_1.merge(function (a, b) { return a < b; }, a, b, c);
        chai_1.expect(heap.top() === 8);
        chai_1.expect(heap.pop() === 8);
        chai_1.expect(heap.top() === 5);
    });
});
//# sourceMappingURL=utils_test.js.map