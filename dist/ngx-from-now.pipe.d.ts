/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Date into time elapsed pipe.
 */
import { PipeTransform } from '@angular/core';
export declare class NgxFromNowPipe implements PipeTransform {
    /**
     * Takes a date value and returns a pretty string from current time,
     * for instance: 'four hours ago' or 'in eleven minutes'.
     */
    transform(value: string, ...args: any[]): string;
}
