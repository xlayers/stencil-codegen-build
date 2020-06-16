import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StencilDocGenService {
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
/** @nocollapse */ StencilDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StencilDocGenService_Factory() { return new StencilDocGenService(); }, token: StencilDocGenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StencilAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     */
    constructor(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        const files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        const context = this.webCodeGenService.context(current);
        /** @type {?} */
        const html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'html'));
        return [
            {
                kind: 'stencil',
                value: this.renderComponent(current, html.value, options),
                language: 'typescript',
                uri: `${options.componentDir}/${fileName}.tsx`
            },
            {
                kind: 'stencil',
                value: this.renderE2e(current),
                language: 'typescript',
                uri: `${options.componentDir}/${fileName}.e2e.ts`
            },
            ...files
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            file => file.language !== 'html'))
                .map((/**
             * @param {?} file
             * @return {?}
             */
            file => (Object.assign({}, file, { kind: 'stencil' }))))
        ];
    }
    /**
     * @private
     * @param {?} current
     * @param {?} html
     * @param {?} options
     * @return {?}
     */
    renderComponent(current, html, options) {
        /** @type {?} */
        const normalizedName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        const className = this.formatService.className(current.name);
        /** @type {?} */
        const tagName = `${options.xmlPrefix}${normalizedName}`;
        /** @type {?} */
        const importStatements = this.renderImportStatements(current);
        return `\
${importStatements}

@Component({
  selector: '${tagName}',
  styleUrl: './${normalizedName}.css'
  shadow: true
})
export class ${className}Component {
  render() {
    return (
${this.formatService.indentFile(3, html).join('\n')}
    );
  }
};`;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    renderE2e(current) {
        /** @type {?} */
        const className = this.formatService.className(current.name);
        /** @type {?} */
        const tagName = this.formatService.normalizeName(current.name);
        return `\
describe('${className}', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<${tagName}></${tagName}>');
    const element = await page.find('${tagName}');
    expect(element).toHaveClass('hydrated');
  });
});`;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    renderImportStatements(current) {
        return [
            'import { Component } from \'@stencil/core\';',
            ...this.generateDynamicImport(current)
        ].join('\n');
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    generateDynamicImport(current) {
        /** @type {?} */
        const context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            component => {
                /** @type {?} */
                const importclassName = this.formatService.className(component);
                /** @type {?} */
                const importFileName = this.formatService.normalizeName(component);
                return `import { ${importclassName} } from "./${importFileName}"; `;
            }))
            : [];
    }
}
StencilAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StencilAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService }
];
/** @nocollapse */ StencilAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StencilAggregatorService_Factory() { return new StencilAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: StencilAggregatorService, providedIn: "root" });
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
class StencilCodeGenService {
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
/** @nocollapse */ StencilCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StencilCodeGenService_Factory() { return new StencilCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(StencilAggregatorService), ɵɵinject(LayerService)); }, token: StencilCodeGenService, providedIn: "root" });
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
class StencilCodeGenModule {
}
StencilCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [WebCodeGenModule]
            },] }
];

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
