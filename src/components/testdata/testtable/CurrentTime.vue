<template>
  <div class = "current-time-container">
    <div class="select-container" @mousedown="move" :style="{width: selectWidth()+'px'}">
    </div>
    <div class="show">
      <span class="select-time-show" >选中时间：{{timeBegin}}----->{{timeEnd}}</span>
      <span class="select-duration-show">时间间隔：{{selectDuration/3600}}小时
      <button @click="durationAdd">+</button><button @click="durationSub">-</button>
        <div v-show="infoShow1" class = "info">
          <img src="@/assets/img/testtable/info3.png" >
          时间间隔不能低于{{timeInterval}}小时
        </div>
        <div v-show="infoShow2" class = "info">
          <img src="@/assets/img/testtable/info3.png" >
          时间间隔不能高于总住院时长
        </div>
        <div v-show="infoShow3" class = "info">
          <img src="@/assets/img/testtable/info3.png" >
          结束时间超过出院时间
        </div>
      </span>
    </div>

  </div>

</template>

<script>


export default {
  name: "CurrentTime",
  data(){
    return {
      timeBegin: this.startTime,
      selectDuration: 3600*24, //默认选中时间 24小时
      infoShow1: false,
      infoShow2: false,
      infoShow3: false,
      timeInterval: 2, //小时
    }
  },
  props: {
    startTime: {
      type: String
    },
    endTime: {
      type: String
    },
    totalTime: {
    }
  },
  computed:{
    timeEnd(){
      let time1 = new Date(this.timeBegin)
      let timetmp = new Date(
          Date.UTC(time1.getUTCFullYear(), time1.getUTCMonth(), time1.getUTCDate(),time1.getUTCHours(),
              time1.getUTCMinutes(), time1.getUTCSeconds()) + this.selectDuration*1000)
      return(this.dateFormat("YYYY-mm-dd HH:MM", timetmp))
    }
  },
  created() {

    this.sendChange()
  },
  watch:{
    startTime: 'setStartTime',
    timeEnd:'sendChange',
  },
  methods: {
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
      }
      return fmt;
    },
    selectWidth(){
      return this.selectDuration/this.totalTime*1050
    },
    move(e){
      let odiv = e.target;        //获取目标元素
      let disX = e.clientX - odiv.offsetLeft;

      document.onmousemove = (e)=> {       //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置

        let left = e.clientX - disX;
        if(left<=0){
          this.timeBegin = this.startTime

        }
        else if(left>=1050-this.selectWidth()){
          let time1 = new Date(this.endTime)
          let timetmp = new Date(
              Date.UTC(time1.getUTCFullYear(), time1.getUTCMonth(), time1.getUTCDate(),time1.getUTCHours(),
                  time1.getUTCMinutes(), time1.getUTCSeconds()) - this.selectDuration*1000)
          this.timeBegin = this.dateFormat("YYYY-mm-dd HH:MM", timetmp)

        }
        else{
          let time1 = new Date(this.startTime)
          let timetmp1 = new Date(
              Date.UTC(time1.getUTCFullYear(), time1.getUTCMonth(), time1.getUTCDate(),time1.getUTCHours(),
                  time1.getUTCMinutes(), time1.getUTCSeconds()) + left/1050*this.totalTime*1000)
          this.timeBegin = this.dateFormat("YYYY-mm-dd HH:MM", timetmp1)

        }

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        // console.log(left);

        //移动当前元素
        if(left<=0){
          odiv.style.left = '0px'
        }
        else if(left>=1050-this.selectWidth()){
          odiv.style.left = 1050-this.selectWidth() + 'px'

        }
        else{
          odiv.style.left = left + 'px';
        }

      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    durationAdd(){
      let left = parseInt(document.getElementsByClassName('select-container')[0].style.left)
      if(left+(this.selectDuration+this.timeInterval*3600)/this.totalTime*1050>1050){
        this.infoShow3 = true

        clearTimeout(this.timer);  //清除延迟执行

        this.timer = setTimeout(()=>{   //设置延迟执行
          this.infoShow3 = false;
        },1000);
      }
      else{
        if(this.selectDuration+this.timeInterval*3600<=this.totalTime) {
          this.selectDuration = this.selectDuration + this.timeInterval * 3600
        }

        else{
          this.infoShow2 = true

          clearTimeout(this.timer);  //清除延迟执行

          this.timer = setTimeout(()=>{   //设置延迟执行
            this.infoShow2 = false;
          },1000);
        }
      }

    },
    durationSub(){
      if(this.selectDuration-this.timeInterval*3600>=this.timeInterval*3600){
        this.selectDuration = this.selectDuration-this.timeInterval*3600
      }
      else{
        this.infoShow1 = true

        clearTimeout(this.timer);  //清除延迟执行

        this.timer = setTimeout(()=>{   //设置延迟执行
          this.infoShow1 = false;
        },1000);


      }

    },
    sendChange(){
      // console.log('hello');
      this.$store.commit('setStartTime',this.timeBegin)
      console.log(this.timeBegin);
      this.$store.commit('setEndTime',this.timeEnd)
      this.$store.commit('setStartIndex')
      this.$store.commit('setEndIndex')
      this.$store.commit('setSelectData')
    },
    setStartTime(){
      this.timeBegin=this.startTime
    }


  },


}
</script>

<style scoped>
  .select-container{
    width: 50px;
    height: 20px;
    background-color: rgba(255, 0, 0, 0.4);
    border: 1px solid black;
    position: absolute;
    top: 60%;
    transform: translateX(-50%);
    transform: translateY(-50%);
    border-radius: 10px;

  }
  .current-time-container{
    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none;/*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;
  }
  .select-time-show{
    font-weight: bold;
    position: absolute;
    top: 10px
  }
  .select-duration-show{
    position: absolute;
    right: 0;
    top: 10px;
    font-weight: bold;
  }
  button{
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 20px;
    height: 20px;
    color: white;
    margin-left: 5px;
    background: #909399;
    text-align: center;
    align-items: center;


  }
  .info{
    border: 1px solid #999898;
    background-color: rgba(211,211,211,0.5);
    color: brown;
    font-weight: normal;
    position: absolute;
    width:220px;
    top: -30px;
    padding-left: 10px;
  }
  img{
    height: 15px;
    position: relative;
    top: 2px;

  }

</style>

