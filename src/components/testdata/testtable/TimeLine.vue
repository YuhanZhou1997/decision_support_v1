<template>
<div id="timeline-container">
  <div id="timeline">
  </div>
  <time-point
      point-color="#0778C4"
      event-type="入院"
      :event-time="hospitalAdmitTime"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <time-point
      point-color="#0778C4"
      event-type="出院"
      :event-time="hospitalDischargeTime"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <time-point
      point-color="green"
      event-type="入ICU"
      :event-time="icuAdmitTime"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <time-point
      point-color="green"
      event-type="出ICU"
      :event-time="icuDischargeTime"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <time-point
      v-for="(item,key) in ventStartTime"
      point-color="darkorange"
      event-type="上机"
      :key="key+10"
      :value="item"
      :event-time="item"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <time-point
      v-for="(item,key) in ventEndTime"
      :key="key+100"
      :value="item"
      point-color="darkorange"
      event-type="撤机"
      :event-time="item"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <time-point
      v-for="(item,key) in intubateTime"
      :key="key"
      point-color="red"
      event-type="插管"
      :event-time="item"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <time-point
      v-for="(item,key) in extubateTime"
      :key="key+1000"
      point-color="red"
      event-type="拔管"
      :event-time="item"
      :start-time="hospitalAdmitTime"
      :total-time="hospitalDuration"
  ></time-point>
  <current-time
      :start-time="hospitalAdmitTime"
      :end-time="hospitalDischargeTime"
      :total-time="hospitalDuration"
  ></current-time>



</div>
</template>

<script>
import TimePoint from "@/components/testdata/testtable/TimePoint";
import CurrentTime from "@/components/testdata/testtable/CurrentTime";
export default {
  name: "TimeLine",
  components: {CurrentTime, TimePoint},
  data() {
    return{
      // hospitalAdmitTime: '2020/01/03 10:21',
      // hospitalDischargeTime: '2020/01/06 13:01',
      // icuAdmitTime: '2020/01/04 10:21',
      // icuDischargeTime: '2020/01/06 9:05',
      // ventStartTime: '2020/01/05 10:55',
      // ventEndTime: '2020/01/06 9:00',
      // intubateTime: '2020/01/05 12:55',
      // extubateTime: '2020/01/06 9:00',


    }
  },

  computed:{
    hospitalAdmitTime(){
      return this.$store.state.data.hospitalAdmitTime
    },
    hospitalDischargeTime(){
      return this.$store.state.data.hospitalDischargeTime
    },
    icuAdmitTime(){
      return this.$store.state.data.icuAdmitTime
    },
    icuDischargeTime(){
      return this.$store.state.data.icuDischargeTime
    },
    ventStartTime(){
      return this.$store.state.data.ventStartTime
    },
    ventEndTime(){
      return this.$store.state.data.ventEndTime
    },
    intubateTime(){
      return this.$store.state.data.intubateTime
    },
    extubateTime(){
      return this.$store.state.data.extubateTime
    },
    hospitalDuration() {
      let timeBegin = new Date(this.hospitalAdmitTime)
      let timeEnd = new Date(this.hospitalDischargeTime)
      return (timeEnd.getTime()-timeBegin.getTime())/1000
    }
  },

}
</script>

<style scoped>
  #timeline-container {
    width: 1050px;
    height: 8%;
    /*background-color:red;*/
    margin: 0 auto;
    position: relative;
    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none;/*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;

  }
  #timeline{
    width:100%;
    height:2px;
    position: absolute;
    top: 60%;
    background-color: #071e24;
  }


</style>