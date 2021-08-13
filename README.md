# 智能辅助决策平台
## 一、技术栈
+ Vue
+ VueX
+ WebPack
+ axios
+ 结合echarts组件

## 二、如何运行
### 由于涉及患者隐私数据，后端部分没有给出，因此无法访问到数据直接运行
### 本部分代码仅为前端代码，运行方式：
```
npm install
npm run serve
npm run build
npm run lint
```

### 三、界面效果

![整体效果](https://github.com/YuhanZhou1997/decision_support_v1/blob/master/src/assets/show_img/total.png)
![左侧展开病人选择模块,双击选择病人](https://github.com/YuhanZhou1997/decision_support_v1/blob/master/src/assets/show_img/total_patient_list.jpg)
![时间线拖动选择时间段，按钮增加（减少）间隔（重要事件标志：入院、入ICU、上机、插管等）](https://github.com/YuhanZhou1997/decision_support_v1/blob/master/src/assets/show_img/time_line.png)
![右侧辅助决策模块（关键事件、风险提醒）](https://github.com/YuhanZhou1997/decision_support_v1/blob/master/src/assets/show_img/decission_support.png)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
