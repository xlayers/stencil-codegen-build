/// <reference types="sketchapp" />
import { ImageService, SymbolService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { StencilAggregatorService } from './stencil-aggregator.service';
declare type WebCodeGenOptions = any;
export declare class StencilCodeGenService {
    private readonly symbolService;
    private readonly imageService;
    private readonly webCodeGen;
    private readonly stencilAggretatorService;
    private readonly layerService;
    constructor(symbolService: SymbolService, imageService: ImageService, webCodeGen: WebCodeGenService, stencilAggretatorService: StencilAggregatorService, layerService: LayerService);
    compute(current: SketchMSLayer, data: SketchMSData, options?: WebCodeGenOptions): void;
    aggregate(data: SketchMSData, options?: WebCodeGenOptions): any[];
    identify(current: SketchMSLayer): boolean;
    context(current: SketchMSLayer): any;
    private visit;
    private visitContent;
    private visitLayer;
    private visitSymbolMaster;
    private compileOptions;
}
export {};
