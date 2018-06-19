"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Heap queue algorithm (a.k.a. priority queue).
 *
 * Inspired by heapq.py from CPython.
 *
 * See https://github.com/python/cpython/blob/master/Lib/heapq.py
 */
var Heapq = /** @class */ (function () {
    function Heapq(heap, comparator) {
        if (heap === void 0) { heap = []; }
        if (comparator === void 0) { comparator = function (a, b) { return a < b; }; }
        this.heap = heap;
        this.comparator = comparator;
        this.heapify();
    }
    /**
     * Pushes item to the heap queue.
     */
    Heapq.prototype.push = function (item) {
        this.heap.push(item);
        this.siftdown(0, this.heap.length - 1);
    };
    /**
     * Pop current smallest item from heap queue.
     * Throw exception if heap queue is empty.
     */
    Heapq.prototype.pop = function () {
        var last = this.heap.pop();
        if (!last) {
            throw new Error("Heap is empty");
        }
        if (!this.heap.length) {
            return last;
        }
        var returnItem = this.heap[0];
        this.heap[0] = last;
        this.siftup(0);
        return returnItem;
    };
    /**
     * Pop the current smallest elemtn and add new item to heap queue.
     */
    Heapq.prototype.replace = function (item) {
        var returnItem = this.heap[0];
        this.heap[0] = item;
        this.siftup(0);
        return item;
    };
    /**
     * Pushes new item to heap queue and then pop the smallest one.
     */
    Heapq.prototype.pushPop = function (item) {
        var _a;
        if (this.heap.length && this.comparator(this.heap[0], item)) {
            _a = [this.heap[0], item], item = _a[0], this.heap[0] = _a[1];
            this.siftup(0);
        }
        return item;
    };
    /**
     * Returns current smallest item in heap queue (does not pop it).
     */
    Heapq.prototype.top = function () {
        return this.heap[0];
    };
    /**
     * Returns the length of the heap.
     */
    Heapq.prototype.length = function () {
        return this.heap.length;
    };
    Heapq.prototype.heapify = function () {
        var n = this.heap.length;
        for (var i = n / 2; i >= 0; i--) {
            this.siftup(i);
        }
    };
    Heapq.prototype.siftdown = function (startPos, pos) {
        var newItem = this.heap[pos];
        if (!newItem) {
            return;
        }
        while (pos > startPos) {
            var parentPos = ((pos - 1) >> 1);
            var parent_1 = this.heap[parentPos];
            if (this.comparator(newItem, parent_1)) {
                this.heap[pos] = parent_1;
                pos = parentPos;
                continue;
            }
            break;
        }
        this.heap[pos] = newItem;
    };
    Heapq.prototype.siftup = function (pos) {
        var endPos = this.heap.length;
        var startPos = pos;
        var newItem = this.heap[pos];
        if (!newItem) {
            return;
        }
        var childPos = 2 * pos + 1;
        while (childPos < endPos) {
            var rightPos = childPos + 1;
            if (rightPos < endPos && !this.comparator(this.heap[childPos], this.heap[rightPos])) {
                childPos = rightPos;
            }
            this.heap[pos] = this.heap[childPos];
            pos = childPos;
            childPos = 2 * pos + 1;
        }
        this.heap[pos] = newItem;
        this.siftdown(startPos, pos);
    };
    return Heapq;
}());
exports.Heapq = Heapq;
//# sourceMappingURL=heapq.js.map