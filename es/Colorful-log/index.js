import { VUE_DEEP_CYAN, VUE_BLUE_GRAY } from "../styles/index.js";
const colorMap = /* @__PURE__ */ new Map([
  ["yellow", "#FFC107"],
  ["orange", "#ff9800"],
  ["red", "#f44336"],
  ["green", "#4caf50"],
  ["cyan", "#00BCD4"],
  ["blue", "#2196f3"],
  ["purple", "#9C27B0"]
]);
const gradientColorMap = /* @__PURE__ */ new Map([
  ["yellow", "linear-gradient(to right, #FDB813, #FFAA00)"],
  ["orange", "linear-gradient(to right, #FFA500, #FF6347)"],
  ["red", "linear-gradient(to right, #FF416C, #FF4B2B)"],
  ["green", "linear-gradient(to right, #00b09b, #96c93d)"],
  ["cyan", "linear-gradient(to right, #1D976C, #93F9B9)"],
  ["blue", "linear-gradient(to right, #2196F3, #4FC3F7)"],
  ["purple", "linear-gradient(to right, #DA22FF, #9733EE)"]
]);
const getLogBy = (logBy) => {
  if (!logBy) {
    return (JSON.parse(sessionStorage.getItem("sso_loginInfo") || "") || {}).userName || "我";
  }
  return logBy;
};
const colorfulLog = ({ usage = "log", logBy = "", logName = "log" }, ...logData) => {
  const _logBy = getLogBy(logBy);
  return console[usage](
    `%c log-by-${_logBy} %c ${logName} %c`,
    `background: ${VUE_DEEP_CYAN}; padding: 6px; border-radius: 1px 0 0 1px; color: #fff; font-size: 13px;`,
    `background: ${VUE_BLUE_GRAY}; padding: 6px; border-radius: 0 1px 1px 0; color: #fff; font-size: 13px;`,
    "background: transparent",
    ...logData
  );
};
const materialColorfulLog = ({ usage = "log", logBy = "", logName = "log", color = "blue", isLinearGradient = true }, ...data) => {
  const _logBy = getLogBy(logBy);
  if (isLinearGradient) {
    console[usage](
      `%c log-by-${_logBy} %c${logName}`,
      `background: ${VUE_DEEP_CYAN}; padding: 6px; border-radius: 1px 0 0 1px; color: #fff; font-size: 13px;`,
      `background-image: ${gradientColorMap.get(color)}; padding: 6px 12px; border-radius: 2px; font-size: 13px; color: #fff; text-transform: uppercase; font-weight: 600;`,
      ...data
    );
  } else {
    console[usage](
      `%c log-by-${_logBy} %c${logName}`,
      `background: ${VUE_DEEP_CYAN}; padding: 6px; border-radius: 1px 0 0 1px; color: #fff; font-size: 13px;`,
      `background-color: ${colorMap.get(color)}; padding: 6px 12px; border-radius: 2px; font-size: 13px; color: #fff; text-transform: uppercase; font-weight: 600;`,
      ...data
    );
  }
};
class ColorfulLogClass {
  constructor(config) {
    this.logTemplate = (logBy = "", logName = "") => `%c log-by-${logBy} %c ${logName} `;
    this.log = (...data) => {
      const firstSquareStyle = `background: ${this.preBlockColor}; padding: ${this.padding}px; border-radius: ${this.borderRadius}px 0 0 ${this.borderRadius}px;  color: ${this.fontColor}`;
      const secondBlockStyle = `background: ${this.nextBlockColor}; padding: ${this.padding}px; border-radius: 0 ${this.borderRadius}px ${this.borderRadius}px 0;  color: ${this.fontColor}`;
      console.log(
        this.logTemplate(this.logBy, this.logName),
        firstSquareStyle,
        secondBlockStyle,
        ...data
      );
    };
    this.logBy = getLogBy(config.logBy);
    this.logName = config.logName || "";
    this.preBlockColor = config.preBlockColor || VUE_DEEP_CYAN;
    this.nextBlockColor = config.nextBlockColor || VUE_BLUE_GRAY;
    this.padding = config.padding || 6;
    this.borderRadius = config.borderRadius || 1;
    this.fontColor = config.fontColor || "#fff";
  }
}
export {
  colorfulLog,
  ColorfulLogClass as default,
  materialColorfulLog
};
