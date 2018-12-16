/* Fill elements of array with value.
 *
 * |Name          |Type  |Desc                    |
 * |--------------|------|------------------------|
 * |list          |array |Array to fill           |
 * |value         |*     |Value to fill array with|
 * |start=0       |number|Start position          |
 * |end=arr.length|number|End position            |
 * |return        |array |Filled array            |
 */

/* example
 * fill([1, 2, 3], '*'); // -> ['*', '*', '*']
 * fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function fill(
 *     list: any[],
 *     value: any,
 *     start?: number,
 *     end?: number
 * ): any[];
 */

_('isUndef');

exports = function(arr, val, start, end) {
    var len = arr.length;

    if (!len) return [];

    if (isUndef(end)) end = len;
    if (isUndef(start)) start = 0;

    while (start < end) arr[start++] = val;

    return arr;
};
