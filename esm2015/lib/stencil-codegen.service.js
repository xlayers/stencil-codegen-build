/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ImageService, SymbolService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { StencilAggregatorService } from './stencil-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "./stencil-aggregator.service";
export class StencilCodeGenService {
    /**
     * @param {?} symbolService
     * @param {?} imageService
     * @param {?} webCodeGen
     * @param {?} stencilAggretatorService
     * @param {?} layerService
     */
    constructor(symbolService, imageService, webCodeGen, stencilAggretatorService, layerService) {
        this.symbolService = symbolService;
        this.imageService = imageService;
        this.webCodeGen = webCodeGen;
        this.stencilAggretatorService = stencilAggretatorService;
        this.layerService = layerService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    compute(current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    aggregate(data, options) {
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.visit(page, data, this.compileOptions(options))));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return this.webCodeGen.identify(current);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    context(current) {
        return this.webCodeGen.context(current);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    visit(current, data, options) {
        return this.visitContent(current, data, options).concat(this.stencilAggretatorService.aggregate(current, data, options));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitContent(current, data, options) {
        if (this.layerService.identify(current)) {
            return this.visitLayer(current, data, options);
        }
        else if (this.symbolService.identify(current)) {
            return this.visitSymbolMaster(current, data, options);
        }
        else if (this.imageService.identify(current)) {
            return this.imageService.aggregate(current, data, options);
        }
        return [];
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitLayer(current, data, options) {
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        layer => this.visitContent(layer, data, options)));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitSymbolMaster(current, data, options) {
        /** @type {?} */
        const symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    compileOptions(options) {
        return Object.assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    }
}
StencilCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StencilCodeGenService.ctorParameters = () => [
    { type: SymbolService },
    { type: ImageService },
    { type: WebCodeGenService },
    { type: StencilAggregatorService },
    { type: LayerService }
];
/** @nocollapse */ StencilCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StencilCodeGenService_Factory() { return new StencilCodeGenService(i0.ɵɵinject(i1.SymbolService), i0.ɵɵinject(i1.ImageService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i3.StencilAggregatorService), i0.ɵɵinject(i1.LayerService)); }, token: StencilCodeGenService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    StencilCodeGenService.prototype.symbolService;
    /**
     * @type {?}
     * @private
     */
    StencilCodeGenService.prototype.imageService;
    /**
     * @type {?}
     * @private
     */
    StencilCodeGenService.prototype.webCodeGen;
    /**
     * @type {?}
     * @private
     */
    StencilCodeGenService.prototype.stencilAggretatorService;
    /**
     * @type {?}
     * @private
     */
    StencilCodeGenService.prototype.layerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlbmNpbC1jb2RlZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9zdGVuY2lsLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvc3RlbmNpbC1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBT3hFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBQ2hDLFlBQ21CLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLFVBQTZCLEVBQzdCLHdCQUFrRCxFQUNsRCxZQUEwQjtRQUoxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQzFDLENBQUM7Ozs7Ozs7SUFFSixPQUFPLENBQ0wsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMkI7UUFFM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQWtCLEVBQUUsT0FBMkI7UUFDdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSwgU3ltYm9sU2VydmljZSwgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5pbXBvcnQgeyBTdGVuY2lsQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuL3N0ZW5jaWwtYWdncmVnYXRvci5zZXJ2aWNlJztcclxuXHJcbnR5cGUgV2ViQ29kZUdlbk9wdGlvbnMgPSBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVuY2lsQ29kZUdlblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW1ib2xTZXJ2aWNlOiBTeW1ib2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlbjogV2ViQ29kZUdlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0ZW5jaWxBZ2dyZXRhdG9yU2VydmljZTogU3RlbmNpbEFnZ3JlZ2F0b3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXllclNlcnZpY2U6IExheWVyU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgY29tcHV0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zPzogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIHRoaXMud2ViQ29kZUdlbi5jb21wdXRlKGN1cnJlbnQsIGRhdGEsIHRoaXMuY29tcGlsZU9wdGlvbnMob3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgYWdncmVnYXRlKGRhdGE6IFNrZXRjaE1TRGF0YSwgb3B0aW9ucz86IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICByZXR1cm4gZGF0YS5wYWdlcy5mbGF0TWFwKHBhZ2UgPT5cclxuICAgICAgdGhpcy52aXNpdChwYWdlLCBkYXRhLCB0aGlzLmNvbXBpbGVPcHRpb25zKG9wdGlvbnMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlkZW50aWZ5KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiB0aGlzLndlYkNvZGVHZW4uaWRlbnRpZnkoY3VycmVudCk7XHJcbiAgfVxyXG5cclxuICBjb250ZXh0KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiB0aGlzLndlYkNvZGVHZW4uY29udGV4dChjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXQoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9ucz86IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpdENvbnRlbnQoY3VycmVudCwgZGF0YSwgb3B0aW9ucykuY29uY2F0KFxyXG4gICAgICB0aGlzLnN0ZW5jaWxBZ2dyZXRhdG9yU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0Q29udGVudChcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgaWYgKHRoaXMubGF5ZXJTZXJ2aWNlLmlkZW50aWZ5KGN1cnJlbnQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0TGF5ZXIoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3ltYm9sU2VydmljZS5pZGVudGlmeShjdXJyZW50KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdFN5bWJvbE1hc3RlcihjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZVNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VTZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRMYXllcihcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMubGF5ZXJTZXJ2aWNlXHJcbiAgICAgIC5sb29rdXAoY3VycmVudClcclxuICAgICAgLmZsYXRNYXAobGF5ZXIgPT4gdGhpcy52aXNpdENvbnRlbnQobGF5ZXIsIGRhdGEsIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRTeW1ib2xNYXN0ZXIoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IHN5bWJvbE1hc3RlciA9IHRoaXMuc3ltYm9sU2VydmljZS5sb29rdXAoY3VycmVudCwgZGF0YSk7XHJcbiAgICBpZiAoc3ltYm9sTWFzdGVyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0KHN5bWJvbE1hc3RlciwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBpbGVPcHRpb25zKG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZXh0VGFnTmFtZTogJ3NwYW4nLFxyXG4gICAgICBiaXRtYXBUYWdOYW1lOiAnaW1nJyxcclxuICAgICAgYmxvY2tUYWdOYW1lOiAnZGl2JyxcclxuICAgICAgeG1sUHJlZml4OiAneGx5LScsXHJcbiAgICAgIGNzc1ByZWZpeDogJ3hseV8nLFxyXG4gICAgICBjb21wb25lbnREaXI6ICdjb21wb25lbnRzJyxcclxuICAgICAgYXNzZXREaXI6ICdhc3NldHMnLFxyXG4gICAgICAuLi5vcHRpb25zXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=