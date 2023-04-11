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

    export type ColorType = 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple' 

    export function colorfulLog({logBy, logName}?: {logBy: string, logName: string}, ...logData: any[]): typeof console;
    
    export function materialColorfulLog({logBy, logName, color, isLinearGradient}: {logBy?: string, logName?: string, color?: ColorType, isLinearGradient?: boolean}, ...data: any[]): typeof console
    export default class ColorfulLogClass {
        constructor(config: IColorfulLogConfig)
        log(data: any[]): typeof console
    }
  }
