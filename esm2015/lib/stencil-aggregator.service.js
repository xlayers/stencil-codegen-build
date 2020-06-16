/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
export class StencilAggregatorService {
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
/** @nocollapse */ StencilAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StencilAggregatorService_Factory() { return new StencilAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: StencilAggregatorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlbmNpbC1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9zdGVuY2lsLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvc3RlbmNpbC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBQ25DLFlBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztjQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7Y0FDaEUsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOztjQUNqRCxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFDO1FBQ3pELE9BQU87WUFDTDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7Z0JBQ3pELFFB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Y29yZSc7XHJcbmltcG9ydCB7IEZvcm1hdFNlcnZpY2UgfSBmcm9tICdAeGxheWVycy9za2V0Y2gtbGliJztcclxuaW1wb3J0IHsgV2ViQ29kZUdlblNlcnZpY2UgfSBmcm9tICdAeGxheWVycy93ZWItY29kZWdlbic7XHJcblxyXG50eXBlIFdlYkNvZGVHZW5PcHRpb25zID0gYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlbmNpbEFnZ3JlZ2F0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2VydmljZTogRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlblNlcnZpY2U6IFdlYkNvZGVHZW5TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBhZ2dyZWdhdGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy53ZWJDb2RlR2VuU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy53ZWJDb2RlR2VuU2VydmljZS5jb250ZXh0KGN1cnJlbnQpO1xyXG4gICAgY29uc3QgaHRtbCA9IGZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmxhbmd1YWdlID09PSAnaHRtbCcpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGtpbmQ6ICdzdGVuY2lsJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJDb21wb25lbnQoY3VycmVudCwgaHRtbC52YWx1ZSwgb3B0aW9ucyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS50c3hgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAnc3RlbmNpbCcsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyRTJlKGN1cnJlbnQpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uZTJlLnRzYFxyXG4gICAgICB9LFxyXG4gICAgICAuLi5maWxlc1xyXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmxhbmd1YWdlICE9PSAnaHRtbCcpXHJcbiAgICAgICAgLm1hcChmaWxlID0+ICh7XHJcbiAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAga2luZDogJ3N0ZW5jaWwnXHJcbiAgICAgICAgfSkpXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJDb21wb25lbnQoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgaHRtbDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtvcHRpb25zLnhtbFByZWZpeH0ke25vcm1hbGl6ZWROYW1lfWA7XHJcbiAgICBjb25zdCBpbXBvcnRTdGF0ZW1lbnRzID0gdGhpcy5yZW5kZXJJbXBvcnRTdGF0ZW1lbnRzKGN1cnJlbnQpO1xyXG4gICAgcmV0dXJuIGBcXFxyXG4ke2ltcG9ydFN0YXRlbWVudHN9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJyR7dGFnTmFtZX0nLFxyXG4gIHN0eWxlVXJsOiAnLi8ke25vcm1hbGl6ZWROYW1lfS5jc3MnXHJcbiAgc2hhZG93OiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyAke2NsYXNzTmFtZX1Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiR7dGhpcy5mb3JtYXRTZXJ2aWNlLmluZGVudEZpbGUoMywgaHRtbCkuam9pbignXFxuJyl9XHJcbiAgICApO1xyXG4gIH1cclxufTtgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJFMmUoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICByZXR1cm4gYFxcXHJcbmRlc2NyaWJlKCcke2NsYXNzTmFtZX0nLCAoKSA9PiB7XHJcbiAgaXQoJ3JlbmRlcnMnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgbmV3RTJFUGFnZSgpO1xyXG5cclxuICAgIGF3YWl0IHBhZ2Uuc2V0Q29udGVudCgnPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PicpO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGF3YWl0IHBhZ2UuZmluZCgnJHt0YWdOYW1lfScpO1xyXG4gICAgZXhwZWN0KGVsZW1lbnQpLnRvSGF2ZUNsYXNzKCdoeWRyYXRlZCcpO1xyXG4gIH0pO1xyXG59KTtgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJJbXBvcnRTdGF0ZW1lbnRzKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICdpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFxcJ0BzdGVuY2lsL2NvcmVcXCc7JyxcclxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUR5bmFtaWNJbXBvcnQoY3VycmVudClcclxuICAgIF0uam9pbignXFxuJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlRHluYW1pY0ltcG9ydChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy53ZWJDb2RlR2VuU2VydmljZS5jb250ZXh0KGN1cnJlbnQpO1xyXG4gICAgcmV0dXJuIGNvbnRleHQgJiYgY29udGV4dC5jb21wb25lbnRzXHJcbiAgICAgID8gY29udGV4dC5jb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW1wb3J0Y2xhc3NOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShjb21wb25lbnQpO1xyXG4gICAgICAgICAgY29uc3QgaW1wb3J0RmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjb21wb25lbnQpO1xyXG4gICAgICAgICAgcmV0dXJuIGBpbXBvcnQgeyAke2ltcG9ydGNsYXNzTmFtZX0gfSBmcm9tIFwiLi8ke2ltcG9ydEZpbGVOYW1lfVwiOyBgO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogW107XHJcbiAgfVxyXG59XHJcbiJdfQ==