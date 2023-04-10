declare module '@tms/co-colorful-log' {
    

    export interface IColorfulLogConfig {
        logBy?: string;
        logName?: string;
        preBlockColor?: string;
        nextBlockColor?: string;
        padding?: number;
        borderRadius?: number;
        fontColor?: string;
    }

    export function colorfulLog(logBy: string, logName: string, ...logData: any[]): typeof console;
    
    export function materialColorfulLog({logName, type, isLinearGradient}: {logName: string, type: string, isLinearGradient: boolean}, ...data: any[]): typeof console
    export default class ColorfulLogClass {
        constructor(config: IColorfulLogConfig)
    }
  }
