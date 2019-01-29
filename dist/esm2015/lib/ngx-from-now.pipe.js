/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Date into time elapsed pipe.
 */
import { Pipe } from '@angular/core';
import * as moment_ from 'moment-mini';
/** @type {?} */
const moment = moment_;
export class NgxFromNowPipe {
    /**
     * Takes a date value and returns a pretty string from current time,
     * for instance: 'four hours ago' or 'in eleven minutes'.
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        return moment(value).fromNow();
    }
}
NgxFromNowPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fromNow',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZyb20tbm93LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnJvbS1ub3ctcGlwZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZnJvbS1ub3cucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUE7QUFDbkQsT0FBTyxLQUFLLE9BQU8sTUFBTSxhQUFhLENBQUE7O01BRWhDLE1BQU0sR0FBRyxPQUFPO0FBTXRCLE1BQU07Ozs7Ozs7O0lBS0osU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFHLElBQUk7UUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQyxDQUFDOzs7WUFYRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7YUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIERhdGUgaW50byB0aW1lIGVsYXBzZWQgcGlwZS5cbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50LW1pbmknXG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudF9cblxuQFBpcGUoe1xuICBuYW1lOiAnZnJvbU5vdycsXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RnJvbU5vd1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIFRha2VzIGEgZGF0ZSB2YWx1ZSBhbmQgcmV0dXJucyBhIHByZXR0eSBzdHJpbmcgZnJvbSBjdXJyZW50IHRpbWUsIFxuICAgKiBmb3IgaW5zdGFuY2U6ICdmb3VyIGhvdXJzIGFnbycgb3IgJ2luIGVsZXZlbiBtaW51dGVzJy5cbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZnJvbU5vdygpXG4gIH1cbn0iXX0=