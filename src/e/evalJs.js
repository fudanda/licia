/* Execute js in given context.
 *
 * |Name      |Type  |Desc           |
 * |----------|------|---------------|
 * |js        |string|JavaScript code|
 * |ctx=global|object|Context        |
 */

/* example
 * evalJs('5+2'); // -> 7
 * evalJs('this.a', {a: 2}); // -> 2
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function evalJs(js: string, ctx?: any): void;
 */

_('root');

exports = function(js, ctx) {
    ctx = ctx || root;

    // Using Function constructor executes much faster than pure eval according to benchmark.
    try {
        return new Function('return (' + js + ');').call(ctx);
    } catch (e) {
        try {
            return new Function('return ' + js).call(ctx);
        } catch (e) {
            return new Function(js).call(ctx);
        }
    }
};
