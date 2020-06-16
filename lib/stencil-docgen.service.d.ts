/// <reference types="sketchapp" />
export declare class StencilDocGenService {
    aggregate(data: SketchMSData): {
        uri: string;
        value: string;
        language: string;
        kind: string;
    }[];
    private renderReadme;
}
