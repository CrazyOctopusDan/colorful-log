declare module '@tms/co-colorful-log' {
    export module styleValue {
        export const DEEP_CYAN
        export const BLUE_GRAY
        export const ARCO_DEEP_BLUE
        export const ARCO_DEEP_ORANGE
        export const ARCO_DEEP_RED
        export const ARCO_DEEP_GREEN
        export const ARCO_LIGHT_BLUE
        export const ARCO_LIGHT_ORANGE
        export const ARCO_LIGHT_RED
        export const ARCO_LIGHT_GREEN
        export const MATERIAL_BLUE
        export const MATERIAL_GREY
        export const MATERIAL_RED
        export const MATERIAL_YELLOW
        export const MATERIAL_GREEN
        export const MATERIAL_ORANGE
        export const MATERIAL_PURPLE
        export const MATERIAL_TEAL
        export const MATERIAL_PINK
        export const MATERIAL_BROWN
        export const MATERIAL_CYAN
        export const MATERIAL_LIME
        export const MATERIAL_DEEP_ORANGE
        export const MATERIAL_LIGHT_BLUE
        export const MATERIAL_AMBER
        export const MATERIAL_INDIGO
        export const MATERIAL_LIGHT_GREEN
        export const MATERIAL_DEEP_PURPLE
        export const MATERIAL_YELLOW_GREEN
        export const MATERIAL_DEEP_CYAN
        export const MATERIAL_DEEP_GREEN
        export const MATERIAL_LIGHT_YELLOW
        export const MATERIAL_LIGHT_RED
        export const MATERIAL_LIGHT_GREEN_2
        export const MATERIAL_LIGHT_ORANGE
        export const MATERIAL_LIGHT_PURPLE
        export const MATERIAL_LIGHT_GREY
        export const MATERIAL_LIGHT_PINK
        export const MATERIAL_LIGHT_TEAL
        export const MATERIAL_DARK_BLUE
        export const MATERIAL_DARK_GREEN
        export const MATERIAL_DARK_PINK
        export const MATERIAL_DARK_CYAN
        export const MATERIAL_DARK_YELLOW
        export const MATERIAL_DARK_RED
        export const MATERIAL_DARK_ORANGE
        export const MATERIAL_DARK_GREY
        export const MATERIAL_DARK_PURPLE
        export const MATERIAL_DARK_TEAL
        export const MATERIAL_DARK_LIME
        export const MATERIAL_DARK_AMBER
        export const MATERIAL_DARK_INDIGO
        export const MATERIAL_DARK_BROWN
        export const MATERIAL_DARK_YELLOW_GREEN
        export const MATERIAL_DARK_LIGHT_BLUE
        export const MATERIAL_DARK_LIGHT_GREEN
        export const MATERIAL_DARK_LIGHT_PINK
        export const MATERIAL_DARK_LIGHT_PURPLE
        export const BIG_CRY
        export const ZI_BI
        export const SEE_SEXY_GIRL
        export const YE_TU_LE
        export const XIAO_NI_MA
        export const MANY_BUGS
        export const FO_ZU_BAO_YOU
        export const MEI_LIAN_JIAN_REN
        export const XIAO_CHOU
        export const SHUT_UP
        export const GUI
        export const YI_TUO_SHI
        export const MEI_NAO_ZI
        export const DAO_LE_CHAN_PIN
        export const SONG_NI_SHANG_XI_TIAN
        export const CHI_YAO_LE_DA_LANG
        export const SHANG_XIAN_LE
        export const BLACK_FACE
        export const YE_ZI_SHU
        export const SONG_SHU
        export const XIAN_REN_ZHANG
        export const JU_GE_LI_ZI
        export const DIAN_ZAN
        export const ZERO_BUG
        export const OK
        export const CALL_ME_TONIGHT
        export const FINGER_RIGHT
        export const FINGER_LEFT
        export const FINGER_UP
        export const FINGER_DOWN
        export const HE_ZUO_YU_KUAI
        export const PEI_ZHONG_DA_FEI_ZHU
        export const NEW_BEE
        export const WANG_WANG_DUI
        export const NIU
        export const KUN
        export const WATERMELON
        export const GREEN_TEA
        export const APPLE
        export const HAMBURGER
        export const CHEERS
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
