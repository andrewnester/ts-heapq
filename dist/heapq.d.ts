/**
 * Heap queue algorithm (a.k.a. priority queue).
 *
 * Inspired by heapq.py from CPython.
 *
 * See https://github.com/python/cpython/blob/master/Lib/heapq.py
 */
export declare class Heapq<T> {
    heap: Array<T>;
    comparator: (a: T, b: T) => boolean;
    constructor(heap?: Array<T>, comparator?: (a: T, b: T) => boolean);
    /**
     * Pushes item to the heap queue.
     */
    push(item: T): void;
    /**
     * Pop current smallest item from heap queue.
     * Throw exception if heap queue is empty.
     */
    pop(): T;
    /**
     * Pop the current smallest elemtn and add new item to heap queue.
     */
    replace(item: T): T;
    /**
     * Pushes new item to heap queue and then pop the smallest one.
     */
    pushPop(item: T): T;
    /**
     * Returns current smallest item in heap queue (does not pop it).
     */
    top(): T;
    /**
     * Returns the length of the heap.
     */
    length(): number;
    private heapify;
    private siftdown;
    private siftup;
}
