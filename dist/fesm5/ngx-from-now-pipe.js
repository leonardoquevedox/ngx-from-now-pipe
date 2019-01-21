import * as moment_ from 'moment-mini';
import { Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFromNowPipeModule = /** @class */ (function () {
    function NgxFromNowPipeModule() {
    }
    NgxFromNowPipeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [NgxFromNowPipe],
                    exports: [NgxFromNowPipe]
                },] }
    ];
    return NgxFromNowPipeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxFromNowPipe, NgxFromNowPipeModule };

//# sourceMappingURL=ngx-from-now-pipe.js.map