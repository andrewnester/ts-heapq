import { Heapq } from "./heapq";
declare function merge<T>(comparator?: (a: T, b: T) => boolean, ...iterables: Array<T[]>): Heapq<T>;
export { merge };
