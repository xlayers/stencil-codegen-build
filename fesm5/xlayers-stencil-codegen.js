import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __spread, __assign } from 'tslib';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ StencilDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StencilDocGenService_Factory() { return new StencilDocGenService(); }, token: StencilDocGenService, providedIn: "root" });
    return StencilDocGenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __spread([
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
        function (file) { return (__assign({}, file, { kind: 'stencil' })); })));
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
        return __spread([
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
    /** @nocollapse */ StencilAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StencilAggregatorService_Factory() { return new StencilAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: StencilAggregatorService, providedIn: "root" });
    return StencilAggregatorService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StencilCodeGenService = /** @class */ (function () {
    function StencilCodeGenService(symbolService, imageService, webCodeGen, stencilAggretatorService, layerService) {
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
    StencilCodeGenService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    };
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    StencilCodeGenService.prototype.aggregate = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return _this.visit(page, data, _this.compileOptions(options));
        }));
    };
    /**
     * @param {?} current
     * @return {?}
     */
    StencilCodeGenService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.identify(current);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    StencilCodeGenService.prototype.context = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.context(current);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    StencilCodeGenService.prototype.visit = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        return this.visitContent(current, data, options).concat(this.stencilAggretatorService.aggregate(current, data, options));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    StencilCodeGenService.prototype.visitContent = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
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
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    StencilCodeGenService.prototype.visitLayer = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        var _this = this;
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        function (layer) { return _this.visitContent(layer, data, options); }));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    StencilCodeGenService.prototype.visitSymbolMaster = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    StencilCodeGenService.prototype.compileOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return __assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    };
    StencilCodeGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StencilCodeGenService.ctorParameters = function () { return [
        { type: SymbolService },
        { type: ImageService },
        { type: WebCodeGenService },
        { type: StencilAggregatorService },
        { type: LayerService }
    ]; };
    /** @nocollapse */ StencilCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StencilCodeGenService_Factory() { return new StencilCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(StencilAggregatorService), ɵɵinject(LayerService)); }, token: StencilCodeGenService, providedIn: "root" });
    return StencilCodeGenService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StencilCodeGenModule = /** @class */ (function () {
    function StencilCodeGenModule() {
    }
    StencilCodeGenModule.decorators = [
        { type: NgModule, args: [{
                    imports: [WebCodeGenModule]
                },] }
    ];
    return StencilCodeGenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StencilCodeGenModule, StencilCodeGenService, StencilDocGenService, StencilAggregatorService as ɵa };
//# sourceMappingURL=xlayers-stencil-codegen.js.map
