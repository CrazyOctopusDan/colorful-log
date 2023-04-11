// 常量
import { VUE_DEEP_CYAN, VUE_BLUE_GRAY } from '../styles';
// Type定义
import { IColorfulLogConfig, IBlockLogClass, ColorType, UsageType } from '../types'
  
  const colorMap = new Map([
    ['yellow', '#FFC107'],
    ['orange', '#ff9800'],
    ['red', '#f44336'],
    ['green', '#4caf50'],
    ['cyan', '#00BCD4'],
    ['blue', '#2196f3'],
    ['purple', '#9C27B0'],
  ]);
  
  const gradientColorMap = new Map([
    ['yellow', 'linear-gradient(to right, #FDB813, #FFAA00)'],
    ['orange', 'linear-gradient(to right, #FFA500, #FF6347)'],
    ['red', 'linear-gradient(to right, #FF416C, #FF4B2B)'],
    ['green', 'linear-gradient(to right, #00b09b, #96c93d)'],
    ['cyan', 'linear-gradient(to right, #1D976C, #93F9B9)'],
    ['blue', 'linear-gradient(to right, #2196F3, #4FC3F7)'],
    ['purple', 'linear-gradient(to right, #DA22FF, #9733EE)'],
  ]);

  /**
   * @Description: 获取log人
   * @param {string} logBy
   */  
  const getLogBy = (logBy?: string) => {
    if (!logBy) {
      /**
       * 如果没有找到名字，可以自己从session中寻找
       */
      return ((JSON.parse((sessionStorage.getItem('sso_loginInfo') || '')) || {}).userName || '我')
    }

    return logBy
  }
  
  /**
   * 基础 log 方法
   * @param {string} logBy log 第一个按钮中的文字内容
   * @param {string} logName log 第二个按钮中的文字内容
   * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
   */
  export const colorfulLog = ({usage = 'log', logBy = '', logName = 'log'}: {usage?: UsageType, logBy?: string, logName?: string}, ...logData: any[]) => {
    return console[usage](
      `%c log-by-${getLogBy(logBy)} %c ${logName} %c`,
      `background: ${VUE_DEEP_CYAN}; padding: 6px; border-radius: 1px 0 0 1px; color: #fff; font-size: 13px;`,
      `background: ${VUE_BLUE_GRAY}; padding: 6px; border-radius: 0 1px 1px 0; color: #fff; font-size: 13px;`,
      'background: transparent',
      ...logData
    )
  };
  
  /**
   * material ui 风格 log 方法
   * @param {object} config log 配置
   * - config.logName - log 按钮中的文字内容
   * - config.type - 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple'
   * - config.isLinearGradient 是否是渐变按钮
   * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
   */
  export const materialColorfulLog = ({usage = 'log', logBy = '', logName = 'log', color = 'blue', isLinearGradient = true }: {usage?: UsageType, logBy?: string, logName?: string, color?: ColorType, isLinearGradient?: boolean}, ...data: any[]) => {
    if (isLinearGradient) {
      console[usage](
        `%c log-by-${getLogBy(logBy)} %c${logName}`,
        `background: ${VUE_DEEP_CYAN}; padding: 6px; border-radius: 1px 0 0 1px; color: #fff; font-size: 13px;`, 
        `background-image: ${gradientColorMap.get(color)}; padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; text-transform: uppercase; font-weight: 600;`, 
        ...data
      );
    } else {
      console[usage](
        `%c log-by-${getLogBy(logBy)} %c${logName}`,
        `background: ${VUE_DEEP_CYAN}; padding: 6px; border-radius: 1px 0 0 1px; color: #fff; font-size: 13px;`, 
        `background-color: ${colorMap.get(color)}; padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; text-transform: uppercase; font-weight: 600;`, 
        ...data
      );
    }  
  };
  
  export default class ColorfulLogClass implements IBlockLogClass {
    logBy;
    logName;
    preBlockColor;
    nextBlockColor;
    padding;
    borderRadius;
    fontColor;
    logTemplate = (logBy = '', logName = '') => `%c log-by-${logBy} %c ${logName} `;
    
    constructor(config: IColorfulLogConfig) {
      this.logBy = getLogBy(config.logBy);
      this.logName = config.logName || '';
      this.preBlockColor = config.preBlockColor || VUE_DEEP_CYAN;
      this.nextBlockColor = config.nextBlockColor || VUE_BLUE_GRAY;
      this.padding = config.padding || 6;
      this.borderRadius = config.borderRadius || 1;
      this.fontColor = config.fontColor || '#fff';
    }
  
    log = (...data: any[]) => {
      const firstSquareStyle = `background: ${this.preBlockColor}; padding: ${this.padding}px; border-radius: ${this.borderRadius}px 0 0 ${this.borderRadius}px;  color: ${this.fontColor}`;
      const secondBlockStyle = `background: ${this.nextBlockColor}; padding: ${this.padding}px; border-radius: 0 ${this.borderRadius}px ${this.borderRadius}px 0;  color: ${this.fontColor}`;
      console.log(
        this.logTemplate(this.logBy, this.logName),
        firstSquareStyle,
        secondBlockStyle,
        ...data
      );
    };
  }
