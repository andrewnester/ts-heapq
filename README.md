## Heapq for Typescript

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Build Status](https://travis-ci.org/andrewnester/ts-heapq.svg?branch=master)](https://travis-ci.org/andrewnester/ts-heapq)
[![Maintainability](https://api.codeclimate.com/v1/badges/b90d3149712e35d098e8/maintainability)](https://codeclimate.com/github/andrewnester/ts-heapq/maintainability)
[![npm version](https://badge.fury.io/js/ts-heapq.svg)](https://badge.fury.io/js/ts-heapq)
[![NPM](https://nodei.co/npm/ts-heapq.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ts-heapq/)

Heap queue algorithm implementation for Typescript based on heapq.py module from CPython

### Installation

    npm install ts-heapq
    
### Use
#### Simple example
    
    import { Heapq } from "ts-heapq";
    
    let heap: Heapq<number> = new Heapq<number>();
    heap.push(3);
    heap.push(1);
    heap.push(2);
    
    heap.top(); // return 1;
    heap.pop(); // return 1, heap contains [2, 3];
    heap.top(); // returns 2;
    
#### Implementing max heap using custom comparator
    
    import { Heapq } from "ts-heapq";
    
    let maxHeap: Heapq<number> = new Heapq<number>([], comparator: (a: number, b: number) => a > b);
    maxHeap.push(1);
    maxHeap.push(3);
    maxHeap.push(2);
    
    maxHeap.top(); // return 3;
    maxHeap.pop(); // return 3, heap contains [2, 1];
    maxHeap.top(); // returns 2;
