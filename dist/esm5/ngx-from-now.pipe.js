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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZyb20tbm93LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsibmd4LWZyb20tbm93LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFBO0FBQ25ELE9BQU8sS0FBSyxPQUFPLE1BQU0sYUFBYSxDQUFBOztJQUVoQyxNQUFNLEdBQUcsT0FBTztBQUV0QjtJQUFBO0lBWUEsQ0FBQztJQVBDOzs7T0FHRzs7Ozs7Ozs7SUFDSCxrQ0FBUzs7Ozs7OztJQUFULFVBQVUsS0FBYTtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzlCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hDLENBQUM7O2dCQVhGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7O0lBVUQscUJBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBEYXRlIGludG8gdGltZSBlbGFwc2VkIHBpcGUuXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudC1taW5pJ1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfXG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Zyb21Ob3cnLFxufSlcblxuZXhwb3J0IGNsYXNzIE5neEZyb21Ob3dQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBUYWtlcyBhIGRhdGUgdmFsdWUgYW5kIHJldHVybnMgYSBwcmV0dHkgc3RyaW5nIGZyb20gY3VycmVudCB0aW1lLCBcbiAgICogZm9yIGluc3RhbmNlOiAnZm91ciBob3VycyBhZ28nIG9yICdpbiBlbGV2ZW4gbWludXRlcycuXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgLi4uYXJncykge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZyb21Ob3coKVxuICB9XG59Il19