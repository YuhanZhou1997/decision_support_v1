<template>
  <div id="vent-information-container">

    <div class="title">▎呼吸机信息</div>
    <div class="com-chart" ref="chart" style="width:100%"></div>

  </div>



</template>

<script>
export default {
name: "VentInformation",
  data(){
    return {}
  },
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
        data:this.$store.state.selectData.data.Vent,}


    }
  },
  watch: {
    startIndex(){
      this.updateChart()
    },
    endIndex(){
      this.updateChart()
    }
  },
  methods: {
    // showInfo(){
    //   console.log(this.selectData.date);
    // },
    initChart() {
      const chart = this.$refs.chart;
      // console.log(chart)
      this.chartInstance = this.$echarts.init(chart,this.theme);

      const initOption = {
        grid:
            {
              left: '4%',
              top: '18%',
              right: '3%',
              bottom: '2%',
              // 把x轴和y轴纳入 grid
              containLabel: true,
            },

        // 工具提示
        tooltip: {
          // 当鼠标移入坐标轴的显示提示
          trigger: 'axis',
        },
        legend: {
          left: 'center',
          top: '3%',
          // 图例的icon类型
          icon: 'circle',

          textStyle: { //图例文字的样式
            color: '#565657',
            fontSize: 15
          },
        },
        xAxis: {
          type: 'category',
          // 紧挨边缘
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          splitLine:{
            show:false
          },
          axisLabel:{formatter:'{value}'}
        },

      }
      this.chartInstance.setOption(initOption)

    },
    updateChart() {
      // 半透明的颜色值
      const colorArr1 = ['rgba(199,3,253,0.2)','rgba(0,115,250,0.2)', 'rgba(17,160,19,0.2)',  'rgba(250,129,0,0.2)', 'rgba(255,221,0,0.2)']
      // 全透明的颜色值
      const colorArr2 = ['rgba(199,3,253,0)','rgba(0,115,250,0)', 'rgba(17,160,19,0)',  'rgba(250,129,0,0)', 'rgba(255,221,0,0)']
      // 线条颜色
      const colorArr = ['rgb(199,3,253)','rgb(0,115,250)', 'rgb(17,160,19)',  'rgb(250,129,0)', 'rgb(255,221,0)']

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
          yAxisIndex: index==3?1:0,
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
          [0,10,20,30,40,50,60,70,80,90,100],
          [100,150,200,250,300,350,400,450,500],
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
  #vent-information-container{
    width: 100%;
    height: 26%;
    background-color: white;
    margin: 0 auto;
    border-radius: 20px;
  }
  .com-chart{
    position: relative;
    height: 100%;
    /*top: -70px;*/
  }
  .title{
    width: 10%;
    position: relative;
    left:2%;
    top: 1%;
    font-size: 20px;
    font-weight: bold;
    float: left;
  }

</style>