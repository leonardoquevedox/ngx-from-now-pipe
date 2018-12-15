(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('moment-mini')) :
    typeof define === 'function' && define.amd ? define('ngx-bank-account-br', ['exports', '@angular/common', '@angular/core', 'moment-mini'], factory) :
    (factory((global['ngx-bank-account-br'] = {}),global.ng.common,global.ng.core,global.moment_));
}(this, (function (exports,common,core,moment_) { 'use strict';

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
            { type: core.Pipe, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgxFromNowPipeModule = NgxFromNowPipeModule;
    exports.ɵa = NgxFromNowPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-bank-account-br.umd.js.map