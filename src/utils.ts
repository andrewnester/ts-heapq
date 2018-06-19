import { Heapq } from "./heapq";

function merge<T>(comparator?: (a: T, b: T) => boolean, ...iterables: Array<T[]>): Heapq<T> {
    const list: T[] = [];
    for (const iter of iterables) {
        list.push(...iter);
    }
    return new Heapq(list, comparator ? comparator : (a: T, b: T) => a < b);
}

export {
    merge
};
