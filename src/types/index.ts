
export interface IColorfulLogConfig {
    logBy?: string;
    logName?: string;
    preBlockColor?: string;
    nextBlockColor?: string;
    padding?: number;
    borderRadius?: number;
    fontColor?: string;
  }
  
export interface IBlockLogClass {
    logBy: string;
    logName: string;
    preBlockColor: string;
    nextBlockColor: string;
    padding: number;
    borderRadius: number;
    fontColor: string;
    logTemplate?: (logBy: string, logName: string) => string;
  }

export interface IBasicConfig {
    usage?: UsageType, 
    logBy?: string, 
    logName?: string
}

export interface ICoBasicConfig extends IBasicConfig {
    color?: ColorType,
    isLinearGradient?: boolean
}

export type ColorType = 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple';

export type UsageType = 
'debug' |
'dirxml' |
'error' |
'group' |
'groupCollapsed' |
'info' |
'log' |
'table' |
'timeLog' |
'trace' |
'warn';
