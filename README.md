# 多彩日志小组件

## 背景

在日常开发的时候总是会有非常多需要调试的地方，有些人喜欢用 debugger，我会更加倾向于使用 console.log，但是在系统中、框架中、合作开发中总会有非常多的 log，或许某些人还需要调试，没办法删除，这个时候满屏的 console.log 就会非常影响自己的开发代码的体验感，所以做了个小组件，方便大家开发调试。

## 安装方式

```nvm
yarn add @tms/co-colorful-log --dev
```

## 使用方式

首先，组件暴露出来两种开箱即用的方法`colorfulLog`、`materialColorfulLog`以及不满足于我预先设定的 log 样式想要自定义修改的类`ColorfulLogClass`。

### 单色 colorfulLog

```ts
import { colorfulLog } from '@tms/co-colorful-log';

...

// 适用于多人开发时
colorfulLog({logBy: '开发者1', logName: '调试1', usage: 'log'}, logContent)

// 单人开发时偷懒做法
colorfulLog({}, logContent)
```

### 渐变色 materialColorfulLog

```ts
import { materialColorfulLog } from '@tms/co-colorful-log';

...

// 适用于多人开发时
materialColorfulLog({logBy: '开发者1', logName: '调试1', usage: 'log', isLinearGradient: true}, logContent)

// 单人开发时偷懒做法
materialColorfulLog({}, logContent)
```

### 自定义类 ColorfulLogClass

```ts
import ColorfulLogClass from '@tms/co-colorful-log';

...

window.myLog = new ColorfulLogClass(config)
```

## API

### `ColorfulLog(config, logContent)`

`config`定义
| 字段名 | 描述 | 默认值 | Type | 是否必填 |
|---|---|---|:--|:--|
| logBy | log 所属人 | 自动查找 sso_loginInfo 中的 userName，建议只有单人开发时候偷偷懒 | String | 非必填 |
| logName | log 的功能 | 「log」，这就是平时开发时候喜欢用上的「console.log('这是我的 log=======>')」 | String | 非必填 |
| useage | log 的形式 | log | debug , dirxml , error , group , groupCollapsed , info , log , table , timeLog , trace , warn | 非必填 |

### `materialColorfulLog(mConfig, logContent)`

`mConfig`定义

```ts
mConfig extends config
```

|      字段名      |     描述     | 默认值 |                         Type                         | 是否必填 |
| :--------------: | :----------: | :----: | :--------------------------------------------------: | :------: |
| isLinearGradient | 是否为渐变色 |  true  |                       Boolean                        |  非必填  |
|      color       | 想用什么颜色 |  blue  | yellow , orange , red , green , cyan , blue , purple |  非必填  |

### `new ColorfulLogClass(config)`

|     字段名     |          描述          |        默认值        |    Type    | 是否必填 |
| :------------: | :--------------------: | :------------------: | :--------: | :------: |
|     logBy      |          同上          |         同上         |   String   |  非必填  |
|    logName     |          同上          |          ''          |   String   |  非必填  |
| preBlockColor  |  logBy 这个方块的颜色  | styleValue.DEEP_CYAN | styleValue |  非必填  |
| nextBlockColor | logName 这个方块的颜色 | styleValue.BLUE_GRAY | styleValue |  非必填  |
|    padding     |       方块的样式       |          6           |   number   |  非必填  |
|  borderRadius  |    方块的样式-圆角     |          1           |   number   |  非必填  |
|   fontColor    |    方块内字体的颜色    |         #fff         |    色值    |  非必填  |
