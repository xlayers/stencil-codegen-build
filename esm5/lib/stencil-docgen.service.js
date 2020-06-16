/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var StencilDocGenService = /** @class */ (function () {
    function StencilDocGenService() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    StencilDocGenService.prototype.aggregate = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    StencilDocGenService.prototype.renderReadme = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return "## How to use the " + name + " StencilJS Web Components\n\nThis implementation export all assets needed to build stenciljs component\n\nSimple use :\n```html\n  // index.html\n  <script src=\"./my-component.js\"></script>\n  <my-component></my-component>\n```\n\nFor more examples how to integrate into your application, view [Framework Integrations](https://stenciljs.com/docs/overview)\n\n>  For more information about [Stenciljs](https://stenciljs.com/)";
    };
    StencilDocGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StencilDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StencilDocGenService_Factory() { return new StencilDocGenService(); }, token: StencilDocGenService, providedIn: "root" });
    return StencilDocGenService;
}());
export { StencilDocGenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlbmNpbC1kb2NnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3N0ZW5jaWwtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9zdGVuY2lsLWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUFBO0tBZ0NDOzs7OztJQTVCQyx3Q0FBUzs7OztJQUFULFVBQVUsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sMkNBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQVk7UUFDL0IsT0FBTyx1QkFDUyxJQUFJLCthQWEwQyxDQUFDO0lBQ2pFLENBQUM7O2dCQS9CRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7K0JBSkQ7Q0FrQ0MsQUFoQ0QsSUFnQ0M7U0E3Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlbmNpbERvY0dlblNlcnZpY2Uge1xyXG4gIGFnZ3JlZ2F0ZShkYXRhOiBTa2V0Y2hNU0RhdGEpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6ICdSRUFETUUubWQnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclJlYWRtZShkYXRhLm1ldGEuYXBwKSxcclxuICAgICAgICBsYW5ndWFnZTogJ21hcmtkb3duJyxcclxuICAgICAgICBraW5kOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyUmVhZG1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGBcXFxyXG4jIyBIb3cgdG8gdXNlIHRoZSAke25hbWV9IFN0ZW5jaWxKUyBXZWIgQ29tcG9uZW50c1xyXG5cclxuVGhpcyBpbXBsZW1lbnRhdGlvbiBleHBvcnQgYWxsIGFzc2V0cyBuZWVkZWQgdG8gYnVpbGQgc3RlbmNpbGpzIGNvbXBvbmVudFxyXG5cclxuU2ltcGxlIHVzZSA6XHJcblxcYFxcYFxcYGh0bWxcclxuICAvLyBpbmRleC5odG1sXHJcbiAgPHNjcmlwdCBzcmM9XCIuL215LWNvbXBvbmVudC5qc1wiPjwvc2NyaXB0PlxyXG4gIDxteS1jb21wb25lbnQ+PC9teS1jb21wb25lbnQ+XHJcblxcYFxcYFxcYFxyXG5cclxuRm9yIG1vcmUgZXhhbXBsZXMgaG93IHRvIGludGVncmF0ZSBpbnRvIHlvdXIgYXBwbGljYXRpb24sIHZpZXcgW0ZyYW1ld29yayBJbnRlZ3JhdGlvbnNdKGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL292ZXJ2aWV3KVxyXG5cclxuPiAgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgW1N0ZW5jaWxqc10oaHR0cHM6Ly9zdGVuY2lsanMuY29tLylgO1xyXG4gIH1cclxufVxyXG4iXX0=