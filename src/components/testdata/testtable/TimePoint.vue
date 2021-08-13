<template>
  <div id="timepoint-container" :style="{position: 'absolute', left:pointPosition()+'px'}">
    <div id="event-point" :style="{background:this.pointColor, }" @mouseenter="enter" @mouseleave="leave">{{this.eventType.charAt(0)}}</div>
    <div :class="{'suspendiv': display, 'sus':!display}" >
      <div id="type">{{this.eventType}}</div>
      <div id="time">{{this.eventTime}}</div>
    </div>

  </div>


</template>

<script>
export default {
  name: "TimePoint",
  data() {
    return {
      display: true,
    }
  },
  props: {
    pointColor:{
      type: String,
      default: 'white',
    },
    eventTime: {
      type: String,
      default: '',
    },
    eventType: {
      type: String,
      default: '',
    },
    startTime: {
      type:String
    },
    totalTime:{}

  },
  methods: {
    pointPosition(){
      let timeBegin = new Date(this.startTime)
      let timeEnd = new Date(this.eventTime)
      let duration = (timeEnd.getTime() - timeBegin.getTime())/1000
      // console.log(duration/this.totalTime*100);
      return duration/this.totalTime*1050-10
    },
    enter() {
      this.display = false
      // console.log(this.display);
    },
    leave() {
      this.display = true
      // console.log(this.display);
    }
  }


}
</script>

<style scoped>
  #timepoint-container{
    height:100%;

    position: relative;

    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none;/*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;



  }
  #event-point{
    width: 20px;
    height:20px;
    top: 60%;
    left: 35%;
    position: absolute;
    transform: translateX(-50%);
    transform: translateY(-50%);
    border-radius: 50%;
    border-width: 10px;
    border-color: white;
    font-size: 15px;
    color: white;
    text-align: center;
    margin: 0;
    /*background-color: white;*/
  }
  #event-point:hover{
    width: 25px;
    height:25px;
    font-size: 18px;
    text-align: center;
  }
  #type{
    font-weight: bold

  }


  .suspendiv{
    display: none;
  }
  .sus{
    display: block;
    width: 150px;
    text-align: center;
    position: absolute;
    top: 63%;
    background-color: rgba(90, 90, 90, 0.2);
    border: 1px solid #999898;
  }


</style>