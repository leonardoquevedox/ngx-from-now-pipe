(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment-mini'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-from-now-pipe', ['exports', 'moment-mini', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-from-now-pipe'] = {}),global.moment_,global.ng.core,global.ng.common));
}(this, (function (exports,moment_,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = moment_;
    var NgxFromNowPipe = (function () {
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
    var NgxFromNowPipeModule = (function () {
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

    exports.NgxFromNowPipe = NgxFromNowPipe;
    exports.NgxFromNowPipeModule = NgxFromNowPipeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-from-now-pipe.umd.js.map