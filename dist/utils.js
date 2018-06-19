"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heapq_1 = require("./heapq");
function merge(comparator) {
    var iterables = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        iterables[_i - 1] = arguments[_i];
    }
    var list = [];
    for (var _a = 0, iterables_1 = iterables; _a < iterables_1.length; _a++) {
        var iter = iterables_1[_a];
        list.push.apply(list, iter);
    }
    return new heapq_1.Heapq(list, comparator ? comparator : function (a, b) { return a < b; });
}
exports.merge = merge;
//# sourceMappingURL=utils.js.map