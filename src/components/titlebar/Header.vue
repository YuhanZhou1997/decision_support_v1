<template>
  <div class = 'container'>

    <img src="../../assets/img/titlebar/headerSrc.png" alt="" id='headContain'/>

    <div class="title-item">
      <div class="logo-img">
        <img src="../../assets/img/titlebar/logoPic.png" alt="" id='logoPic'/>
        <img src="../../assets/img/titlebar/logoFont.png" alt="" id='logoFont'/>
      </div>
      <h1 id="title">临床决策辅助平台</h1>
      <div class="time">
        <img src="../../assets/img/titlebar/clock.png" alt="" id="clock" />
        <span class="datetime">{{ systemDateTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 当前的系统时间
      systemDateTime: null,
      timerID: null,
    }
  },
  created() {
    this.currentTime()
  },
  methods: {
    currentTime() {
      this.systemDateTime = new Date().toLocaleString()

      this.timerID && clearInterval(this.timerID)

      this.timerID = setInterval(() => {
        this.systemDateTime = new Date().toLocaleString()
      }, 1000)
    },
  },
  destroyed() {
    // 组件销毁时，销毁事件
    clearInterval(this.timerID)
  },
}

</script>

<style scoped>
  .container {
    width: 100%;
    height: 85px;
    overflow: hidden;
    position:relative;
    /*align-items: center;*/

  }
  #headContain {
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
  }
  .title-item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 1%;
    display: flex;
    overflow: hidden;
  }
  .logo-img {
    left: 0;
    width:260px;
    display: flex;
  }
  #logoPic {
    height: 50px;
    weight: auto;
    margin-top: 7px;
  }
  #logoFont {
    height: 30px;
    weight: auto;
    margin-top: 20px;

  }
  #title {
    margin: 15px auto;
    font-size: 40px;
    font-weight: normal;
    font-family: 微軟正黑體;
    font-weight: bolder;

  }
  .time {
    display: flex;
    margin-top: auto ;
    margin-bottom: auto;
    margin-right: 0;
    right: 0;
    width: 260px;
    align-items: center;
  }
  #clock {
    width: 15px;
    height: auto;
    flex: 0.5;
  }
  .datetime{
    font-size: 25px;
  }


</style>