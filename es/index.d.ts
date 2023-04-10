declare interface IColorfulLogConfig {
    logBy?: string;
    logName?: string;
    preBlockColor?: string;
    nextBlockColor?: string;
    padding?: number;
    borderRadius?: number;
    fontColor?: string;
}

declare class ColorfulLogClass {
    constructor(config: IColorfulLogConfig)
}
