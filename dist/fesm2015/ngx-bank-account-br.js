import { CommonModule } from '@angular/common';
import { Pipe, NgModule } from '@angular/core';
import * as moment_ from 'moment-mini';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
class NgxFromNowPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxFromNowPipeModule {
}
NgxFromNowPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgxFromNowPipe],
                exports: [NgxFromNowPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxFromNowPipeModule, NgxFromNowPipe as ɵa };

//# sourceMappingURL=ngx-bank-account-br.js.map