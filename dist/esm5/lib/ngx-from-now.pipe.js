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
var moment = moment_;
var NgxFromNowPipe = /** @class */ (function () {
    function NgxFromNowPipe() {
    }
    /**
     * Takes a date value and returns a pretty string from current time,
     * for instance: 'four hours ago' or 'in eleven minutes'.
     */
    /**
     * Takes a date value and returns a pretty string from current time,
     * for instance: 'four hours ago' or 'in eleven minutes'.
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    NgxFromNowPipe.prototype.transform = /**
     * Takes a date value and returns a pretty string from current time,
     * for instance: 'four hours ago' or 'in eleven minutes'.
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return moment(value).fromNow();
    };
    NgxFromNowPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fromNow',
                },] }
    ];
    return NgxFromNowPipe;
}());
export { NgxFromNowPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZyb20tbm93LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnJvbS1ub3ctcGlwZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZnJvbS1ub3cucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUE7QUFDbkQsT0FBTyxLQUFLLE9BQU8sTUFBTSxhQUFhLENBQUE7O0lBRWhDLE1BQU0sR0FBRyxPQUFPO0FBRXRCO0lBQUE7SUFZQSxDQUFDO0lBUEM7OztPQUdHOzs7Ozs7OztJQUNILGtDQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUFhO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQyxDQUFDOztnQkFYRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOztJQVVELHFCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gRGF0ZSBpbnRvIHRpbWUgZWxhcHNlZCBwaXBlLlxuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQtbWluaSdcblxuY29uc3QgbW9tZW50ID0gbW9tZW50X1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmcm9tTm93Jyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hGcm9tTm93UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogVGFrZXMgYSBkYXRlIHZhbHVlIGFuZCByZXR1cm5zIGEgcHJldHR5IHN0cmluZyBmcm9tIGN1cnJlbnQgdGltZSwgXG4gICAqIGZvciBpbnN0YW5jZTogJ2ZvdXIgaG91cnMgYWdvJyBvciAnaW4gZWxldmVuIG1pbnV0ZXMnLlxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mcm9tTm93KClcbiAgfVxufSJdfQ==