/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
var StencilAggregatorService = /** @class */ (function () {
    function StencilAggregatorService(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    StencilAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        var files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        var context = this.webCodeGenService.context(current);
        /** @type {?} */
        var html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'html'; }));
        return tslib_1.__spread([
            {
                kind: 'stencil',
                value: this.renderComponent(current, html.value, options),
                language: 'typescript',
                uri: options.componentDir + "/" + fileName + ".tsx"
            },
            {
                kind: 'stencil',
                value: this.renderE2e(current),
                language: 'typescript',
                uri: options.componentDir + "/" + fileName + ".e2e.ts"
            }
        ], files
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language !== 'html'; }))
            .map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return (tslib_1.__assign({}, file, { kind: 'stencil' })); })));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} html
     * @param {?} options
     * @return {?}
     */
    StencilAggregatorService.prototype.renderComponent = /**
     * @private
     * @param {?} current
     * @param {?} html
     * @param {?} options
     * @return {?}
     */
    function (current, html, options) {
        /** @type {?} */
        var normalizedName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        var className = this.formatService.className(current.name);
        /** @type {?} */
        var tagName = "" + options.xmlPrefix + normalizedName;
        /** @type {?} */
        var importStatements = this.renderImportStatements(current);
        return importStatements + "\n\n@Component({\n  selector: '" + tagName + "',\n  styleUrl: './" + normalizedName + ".css'\n  shadow: true\n})\nexport class " + className + "Component {\n  render() {\n    return (\n" + this.formatService.indentFile(3, html).join('\n') + "\n    );\n  }\n};";
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    StencilAggregatorService.prototype.renderE2e = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var className = this.formatService.className(current.name);
        /** @type {?} */
        var tagName = this.formatService.normalizeName(current.name);
        return "describe('" + className + "', () => {\n  it('renders', async () => {\n    const page = await newE2EPage();\n\n    await page.setContent('<" + tagName + "></" + tagName + ">');\n    const element = await page.find('" + tagName + "');\n    expect(element).toHaveClass('hydrated');\n  });\n});";
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    StencilAggregatorService.prototype.renderImportStatements = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return tslib_1.__spread([
            'import { Component } from \'@stencil/core\';'
        ], this.generateDynamicImport(current)).join('\n');
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    StencilAggregatorService.prototype.generateDynamicImport = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                /** @type {?} */
                var importclassName = _this.formatService.className(component);
                /** @type {?} */
                var importFileName = _this.formatService.normalizeName(component);
                return "import { " + importclassName + " } from \"./" + importFileName + "\"; ";
            }))
            : [];
    };
    StencilAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StencilAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService }
    ]; };
    /** @nocollapse */ StencilAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StencilAggregatorService_Factory() { return new StencilAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: StencilAggregatorService, providedIn: "root" });
    return StencilAggregatorService;
}());
export { StencilAggregatorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StencilAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    StencilAggregatorService.prototype.webCodeGenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlbmNpbC1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9zdGVuY2lsLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvc3RlbmNpbC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUl6RDtJQUlFLGtDQUNtQixhQUE0QixFQUM1QixpQkFBb0M7UUFEcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNwRCxDQUFDOzs7Ozs7O0lBRUosNENBQVM7Ozs7OztJQUFULFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O1lBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztZQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7WUFDaEUsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOztZQUNqRCxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUF4QixDQUF3QixFQUFDO1FBQ3pEO1lBQ0U7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO2dCQUN6RCxRQUFR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LHFEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5pbXBvcnQgeyBXZWJDb2RlR2VuU2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3dlYi1jb2RlZ2VuJztcclxuXHJcbnR5cGUgV2ViQ29kZUdlbk9wdGlvbnMgPSBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVuY2lsQWdncmVnYXRvclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRTZXJ2aWNlOiBGb3JtYXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb2RlR2VuU2VydmljZTogV2ViQ29kZUdlblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGFnZ3JlZ2F0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmNvbnRleHQoY3VycmVudCk7XHJcbiAgICBjb25zdCBodG1sID0gZmlsZXMuZmluZChmaWxlID0+IGZpbGUubGFuZ3VhZ2UgPT09ICdodG1sJyk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogJ3N0ZW5jaWwnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlckNvbXBvbmVudChjdXJyZW50LCBodG1sLnZhbHVlLCBvcHRpb25zKSxcclxuICAgICAgICBsYW5ndWFnZTogJ3R5cGVzY3JpcHQnLFxyXG4gICAgICAgIHVyaTogYCR7b3B0aW9ucy5jb21wb25lbnREaXJ9LyR7ZmlsZU5hbWV9LnRzeGBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtpbmQ6ICdzdGVuY2lsJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJFMmUoY3VycmVudCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5lMmUudHNgXHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLmZpbGVzXHJcbiAgICAgICAgLmZpbHRlcihmaWxlID0+IGZpbGUubGFuZ3VhZ2UgIT09ICdodG1sJylcclxuICAgICAgICAubWFwKGZpbGUgPT4gKHtcclxuICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICBraW5kOiAnc3RlbmNpbCdcclxuICAgICAgICB9KSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNvbXBvbmVudChcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBodG1sOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29wdGlvbnMueG1sUHJlZml4fSR7bm9ybWFsaXplZE5hbWV9YDtcclxuICAgIGNvbnN0IGltcG9ydFN0YXRlbWVudHMgPSB0aGlzLnJlbmRlckltcG9ydFN0YXRlbWVudHMoY3VycmVudCk7XHJcbiAgICByZXR1cm4gYFxcXHJcbiR7aW1wb3J0U3RhdGVtZW50c31cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnJHt0YWdOYW1lfScsXHJcbiAgc3R5bGVVcmw6ICcuLyR7bm9ybWFsaXplZE5hbWV9LmNzcydcclxuICBzaGFkb3c6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzICR7Y2xhc3NOYW1lfUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuJHt0aGlzLmZvcm1hdFNlcnZpY2UuaW5kZW50RmlsZSgzLCBodG1sKS5qb2luKCdcXG4nKX1cclxuICAgICk7XHJcbiAgfVxyXG59O2A7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckUyZShjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIHJldHVybiBgXFxcclxuZGVzY3JpYmUoJyR7Y2xhc3NOYW1lfScsICgpID0+IHtcclxuICBpdCgncmVuZGVycycsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBuZXdFMkVQYWdlKCk7XHJcblxyXG4gICAgYXdhaXQgcGFnZS5zZXRDb250ZW50KCc8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+Jyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXdhaXQgcGFnZS5maW5kKCcke3RhZ05hbWV9Jyk7XHJcbiAgICBleHBlY3QoZWxlbWVudCkudG9IYXZlQ2xhc3MoJ2h5ZHJhdGVkJyk7XHJcbiAgfSk7XHJcbn0pO2A7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckltcG9ydFN0YXRlbWVudHMoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgJ2ltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXFwnQHN0ZW5jaWwvY29yZVxcJzsnLFxyXG4gICAgICAuLi50aGlzLmdlbmVyYXRlRHluYW1pY0ltcG9ydChjdXJyZW50KVxyXG4gICAgXS5qb2luKCdcXG4nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVEeW5hbWljSW1wb3J0KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmNvbnRleHQoY3VycmVudCk7XHJcbiAgICByZXR1cm4gY29udGV4dCAmJiBjb250ZXh0LmNvbXBvbmVudHNcclxuICAgICAgPyBjb250ZXh0LmNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbXBvcnRjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICBjb25zdCBpbXBvcnRGaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICByZXR1cm4gYGltcG9ydCB7ICR7aW1wb3J0Y2xhc3NOYW1lfSB9IGZyb20gXCIuLyR7aW1wb3J0RmlsZU5hbWV9XCI7IGA7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBbXTtcclxuICB9XHJcbn1cclxuIl19