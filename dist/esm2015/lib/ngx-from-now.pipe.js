/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZyb20tbm93LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnJvbS1ub3ctcGlwZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZnJvbS1ub3cucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUE7QUFDbkQsT0FBTyxLQUFLLE9BQU8sTUFBTSxhQUFhLENBQUE7O01BRWhDLE1BQU0sR0FBRyxPQUFPO0FBTXRCLE1BQU07Ozs7Ozs7O0lBS0osU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFHLElBQUk7UUFDOUIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEMsQ0FBQzs7O1lBWEYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBEYXRlIGludG8gdGltZSBlbGFwc2VkIHBpcGUuXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudC1taW5pJ1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfXG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Zyb21Ob3cnLFxufSlcblxuZXhwb3J0IGNsYXNzIE5neEZyb21Ob3dQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBUYWtlcyBhIGRhdGUgdmFsdWUgYW5kIHJldHVybnMgYSBwcmV0dHkgc3RyaW5nIGZyb20gY3VycmVudCB0aW1lLCBcbiAgICogZm9yIGluc3RhbmNlOiAnZm91ciBob3VycyBhZ28nIG9yICdpbiBlbGV2ZW4gbWludXRlcycuXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgLi4uYXJncykge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZyb21Ob3coKVxuICB9XG59Il19