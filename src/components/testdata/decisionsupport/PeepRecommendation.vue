<template>
  <div id="peep-recommendation">
    <div class="title">▎呼吸机设置值推荐</div>
    <div class="com-chart" ref="chart" style="width:100%"></div>

  </div>
</template>

<script>
export default {
name: "PeepRecommendation",

  mounted() {
    this.initChart()
    this.updateChart()

  },
  computed: {
    startTime() {

      return this.$store.state.startTime
    },
    endTime() {
      return this.$store.state.endTime
    },
    startIndex(){
      return this.$store.state.startIndex

    },
    endIndex(){
      return this.$store.state.endIndex

    },
    selectData(){
      return {'date':this.$store.state.selectData.date,
        data:this.$store.state.selectData.data.PeepRecommendation,}


    },


  },
  watch: {
    // startIndex(){
    //   this.updateChart()
    // },
    endIndex(){
      this.updateChart()
      // this.showWarning()
    }
  },
  methods: {
    // showInfo(){
    //   console.log(this.selectData.date);
    // },
    initChart() {
      // console.log(this.selectData);
      const chart = this.$refs.chart;
      // console.log(chart)
      this.chartInstance = this.$echarts.init(chart, this.theme);

      const initOption = {
        grid:
            {
              left: '1%',
              top: '30%',
              right: '4%',
              bottom: '1%',
              // 把x轴和y轴纳入 grid
              containLabel: true,
            },

        // 工具提示
        tooltip: {
          // 当鼠标移入坐标轴的显示提示
          trigger: 'axis',
        },
        legend: {
          show: true,
          left: 'right',
          top: '1%',

          // 图例的icon类型
          icon: 'circle',

          textStyle: { //图例文字的样式
            color: '#565657',
            fontSize: 15
          },
        },
        xAxis: {
          show: false,
          axisLabel: false,
          type: 'category',
          // 紧挨边缘
          boundaryGap: false,
        },
        yAxis: {
          show: false,
          // min: 0,
          // max: 30,
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {formatter: '{value}'}
        },

        series: [
          {
            type: 'line',
            lineStyle: {
              width: 4
            },
            symbolSize: 8,
            label: {
              show: true,
              position: 'top',
              color: '#565657',
              rotate: 0,
              fontsize: 8,
              // formatter: '{value} %'
            },
            itemStyle: {
              normal: {
                barBorderRadius: [10, 10, 0, 0], // 设置柱状图圆角
              }
            }

          },
        ],

      }
      this.chartInstance.setOption(initOption)

    },
    updateChart() {
      // 半透明的颜色值
      const colorArr1 = ['rgba(3,253,36,0.5)', 'rgba(23,130,212,0.5)','rgb(22,184,184,0.5)',  'rgb(224,116,129,0.5)', 'rgb(80,186,41,0.5)','rgb(243,183,27,0.5)']
      // 全透明的颜色值
      const colorArr2 = ['rgba(3,253,36,0)', 'rgba(23,130,212,0)','rgb(22,184,184,0)',  'rgb(224,116,129,0)', 'rgb(80,186,41,0)','rgb(243,183,27,0)']
      // 线条颜色
      const colorArr = ['rgb(3,253,36)', 'rgb(23,130,212)','rgb(22,184,184)',  'rgb(224,116,129)', 'rgb(80,186,41)','rgb(243,183,27)']

      // x轴数据
      const time = this.selectData.date
      // y轴数据 series下的数据
      const valueArr = this.selectData.data
      // console.log(valueArr);
      const seriesArr = valueArr.map((item, index) => {
        // console.log(item);
        return {
          // 图例的数据需要和series的name匹配
          name: item.name,
          type: 'line',
          data: item.data,
          // 同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
          // 线条颜色

          lineStyle:{
            color:colorArr[index],
            width:3,
          },
          itemStyle:{
            color:colorArr[index],

          },
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              // 0% 颜色
              {
                offset: 0,
                color: colorArr1[index],
              },
              // 100% 颜色
              {
                offset: 1,
                color: colorArr2[index],
              },
            ]),
          },



          connectNulls: true,
          // yAxisIndex: index==0|index==2?1:0,
          symbolSize: 6,


        }
      })
      // 准备图例的数据
      // console.log(seriesArr)
      const legendArr = valueArr.map(item => item.name)
      // console.log(legendArr)
      const dataOption = {
        xAxis: {
          data: time,
        },
        yAxis: [
          [0,10,20,30,40,50,60,70,80,90,100,110,120],
          [0,50,100,150,200,250,300,350,400,450,500],
        ],
        legend: {
          data: legendArr,
        },
        series: seriesArr,

      }
      // console.log(dataOption)
      this.chartInstance.setOption(dataOption)
      // console.log(seriesArr)
    },

  }
}
</script>

<style scoped>
  #peep-recommendation{
    margin-top: 2%;
    width: 100%;
    height: 20%;
    background-color: white;
    border-radius: 20px;
  }
  .title{
    width: 50%;
    position: relative;
    padding-top: 2%;
    left:2%;
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
  .com-chart{
    /*border: 1px solid #999898;*/
    position: relative;
    top: 5%;
    /*bottom: 0px;*/
    width:80%;
    height: 90%;
    /*top: -70px;*/
  }

</style>