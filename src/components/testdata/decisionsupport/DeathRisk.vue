<template>
<div id="death-risk-container">
  <div class="title">▎死亡风险</div>
  <div v-show="isShowWarning" class = "info">
    <img src="@/assets/img/testtable/info3.png" >
    死亡风险较高!
  </div>
  <div class="com-chart" ref="chart" style="width:100%"></div>


</div>
</template>

<script>
export default {
name: "DeathRisk",
  data(){
  return {
    isShowWarning:false
  }

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
        data:this.$store.state.selectData.data.DeathRisk,}


    },


  },
  watch: {
    // startIndex(){
    //   this.updateChart()
    // },
    endIndex(){
      this.updateChart()
      this.showWarning()
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
      this.chartInstance = this.$echarts.init(chart,this.theme);

      const initOption = {
        grid:
            {
              left: '1%',
              top: 0,
              right: '4%',
              bottom: 0,
              // 把x轴和y轴纳入 grid
              containLabel: true,
            },

        // 工具提示
        tooltip: {
          // 当鼠标移入坐标轴的显示提示
          trigger: 'axis',
        },
        legend: {
          show:false,
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
          show:false,
          axisLabel: false,
          type: 'category',
          // 紧挨边缘
          boundaryGap: false,
        },
        yAxis: {
          show:false,
          min:0,
          max:100,
          type: 'value',
          splitLine:{
            show:false
          },
          axisLabel:{formatter:'{value} %'}
        },
        // visualMap: {
        //   top: 10,
        //   right: 10,
        //   pieces: [{
        //     gt: 0,
        //     lte: 50,
        //     color: '#096'
        //   }, {
        //     gt: 50,
        //     lte: 100,
        //     color: '#ffde33'
        //   }, {
        //     gt: 100,
        //     lte: 150,
        //     color: '#ff9933'
        //   },]
        //
        // },

        series: [
          {
            type: 'bar',
            lineStyle:{
              width: 4
            },
            symbolSize:8,
            label: {
              show: true,
              position: 'top',
              color: '#565657',
              rotate: 40,
              fontsize:8,
              // formatter: '{value} %'
            },
            itemStyle: {
              normal: {
                barBorderRadius:[10, 10, 0, 0], // 设置柱状图圆角
              }
            }

          },
        ],

      }
      this.chartInstance.setOption(initOption)

    },
    updateChart() {
      // 渐变色数组
      const colorArr = [
        ['#5052EE', '#AB6EE5'],
        ['#2E72BF', '#23E5E5'],
        ['#0BA82C', '#4FF778'],
      ]
      // x轴数据
      const time = this.selectData.date
      // y轴数据 series下的数据
      const valueArr = this.selectData.data[0].data

      // console.log(valueArr);
      const dataOption = {
        xAxis: {
          data: time,
        },
        // dataZoom: {
        //   // 区域缩放组件
        //   show: false,
        //   startValue: this.startValue,
        //   endValue: this.endValue,
        // },
        series: [
          {
            data: valueArr,
            itemStyle: {
              color: arg => {
                let targetColorArr = null

                if (arg.value > 80) {
                  targetColorArr = colorArr[0]
                } else if (arg.value > 50) {
                  targetColorArr = colorArr[1]
                } else {
                  targetColorArr = colorArr[2]
                }


                return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  // 0%
                  { offset: 0, color: targetColorArr[0] },
                  // 100%
                  { offset: 1, color: targetColorArr[1] },
                ])
              },

            },
            // areaStyle:{
            //
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     // 0% 颜色
            //     {
            //       offset: 0,
            //       color: targetColorArr[0],
            //     },
            //     // 100% 颜色
            //     {
            //       offset: 1,
            //       color: targetColorArr[1],
            //     },
            //   ]),
            // }

          },
        ],
      }
      this.chartInstance.setOption(dataOption)
      // console.log(dataOption)
      // console.log(dataOption.series[0].itemStyle.color);
      // console.log(seriesArr)
    },
    showWarning() {
      let maxRisk = Math.max(...this.selectData.data[0].data)
      if(maxRisk>=80){
        this.isShowWarning = true

          // clearTimeout(this.timer);  //清除延迟执行
          //
          // this.timer = setTimeout(()=>{   //设置延迟执行
          //   this.infoShow3 = false;
          // },1000);
          // this.isShowWarning = !this.isShowWarning


      }
      else{
        this.isShowWarning = false
      }
      // console.log(this.isShowWarning);
      // console.log(maxRisk>=80);

    }


  }


}
</script>

<style scoped>
  #death-risk-container{
    width: 100%;
    height: 20%;
    background-color: white;
    border-radius: 20px;
  }
  .title{
    width: 30%;
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
    top: 17%;
    /*bottom: 0px;*/
    width:80%;
    height: 80%;
    /*top: -70px;*/
  }
  .info{
    border: 1px solid #999898;
    /*background-color: rgba(211,211,211,0.5);*/
    color: red;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    float: left;
    width:170px;
    margin-top: 2%;
    padding-left: 10px;
  }
  img{
    height: 18px;
    position: relative;
    top: 2px;

  }
</style>