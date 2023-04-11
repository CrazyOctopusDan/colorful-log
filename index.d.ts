declare module '@tms/co-colorful-log' {
    export interface IBasicConfig {
        usage?: UsageType, 
        logBy?: string, 
        logName?: string
    }

    export interface ICoBasicConfig extends IBasicConfig {
        color?: ColorType,
        isLinearGradient?: boolean
    }


    export interface IColorfulLogConfig {
        logBy?: string;
        logName?: string;
        preBlockColor?: string;
        nextBlockColor?: string;
        padding?: number;
        borderRadius?: number;
        fontColor?: string;
    }

    export type UsageType = 'debug' | 'dirxml' | 'error' | 'group' | 'groupCollapsed' | 'info' | 'log' | 'table' | 'timeLog' | 'trace' | 'warn';

    export type ColorType = 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple' 

    export function colorfulLog({usage, logBy, logName}?: IBasicConfig, ...logData: any[]): typeof console;
    
    export function materialColorfulLog({logBy, logName, color, isLinearGradient}: ICoBasicConfig, ...data: any[]): typeof console
    export default class ColorfulLogClass {
        constructor(config: IColorfulLogConfig)
        log(data: any[]): typeof console
    }
  }
