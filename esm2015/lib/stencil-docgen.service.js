/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StencilDocGenService {
    /**
     * @param {?} data
     * @return {?}
     */
    aggregate(data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderReadme(name) {
        return `\
## How to use the ${name} StencilJS Web Components

This implementation export all assets needed to build stenciljs component

Simple use :
\`\`\`html
  // index.html
  <script src="./my-component.js"></script>
  <my-component></my-component>
\`\`\`

For more examples how to integrate into your application, view [Framework Integrations](https://stenciljs.com/docs/overview)

>  For more information about [Stenciljs](https://stenciljs.com/)`;
    }
}
StencilDocGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ StencilDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StencilDocGenService_Factory() { return new StencilDocGenService(); }, token: StencilDocGenService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlbmNpbC1kb2NnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3N0ZW5jaWwtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9zdGVuY2lsLWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDL0IsT0FBTztvQkFDUyxJQUFJOzs7Ozs7Ozs7Ozs7O2tFQWEwQyxDQUFDO0lBQ2pFLENBQUM7OztZQS9CRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVuY2lsRG9jR2VuU2VydmljZSB7XHJcbiAgYWdncmVnYXRlKGRhdGE6IFNrZXRjaE1TRGF0YSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHVyaTogJ1JFQURNRS5tZCcsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyUmVhZG1lKGRhdGEubWV0YS5hcHApLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnbWFya2Rvd24nLFxyXG4gICAgICAgIGtpbmQ6ICd0ZXh0J1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJSZWFkbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYFxcXHJcbiMjIEhvdyB0byB1c2UgdGhlICR7bmFtZX0gU3RlbmNpbEpTIFdlYiBDb21wb25lbnRzXHJcblxyXG5UaGlzIGltcGxlbWVudGF0aW9uIGV4cG9ydCBhbGwgYXNzZXRzIG5lZWRlZCB0byBidWlsZCBzdGVuY2lsanMgY29tcG9uZW50XHJcblxyXG5TaW1wbGUgdXNlIDpcclxuXFxgXFxgXFxgaHRtbFxyXG4gIC8vIGluZGV4Lmh0bWxcclxuICA8c2NyaXB0IHNyYz1cIi4vbXktY29tcG9uZW50LmpzXCI+PC9zY3JpcHQ+XHJcbiAgPG15LWNvbXBvbmVudD48L215LWNvbXBvbmVudD5cclxuXFxgXFxgXFxgXHJcblxyXG5Gb3IgbW9yZSBleGFtcGxlcyBob3cgdG8gaW50ZWdyYXRlIGludG8geW91ciBhcHBsaWNhdGlvbiwgdmlldyBbRnJhbWV3b3JrIEludGVncmF0aW9uc10oaHR0cHM6Ly9zdGVuY2lsanMuY29tL2RvY3Mvb3ZlcnZpZXcpXHJcblxyXG4+ICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBbU3RlbmNpbGpzXShodHRwczovL3N0ZW5jaWxqcy5jb20vKWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==