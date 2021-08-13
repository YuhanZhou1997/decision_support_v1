<template>
<div id="basic-container2">
  <div>
    <div class="title">▎基本信息</div>
    <div class="block-info">
      <div class="inline-info">
        <div class="item"><span>性别：</span>{{ gender }}</div>
        <div class="item"><span>年龄：</span>{{age}}</div>

      </div>
      <div class="inline-info"><span>诊断：</span>{{diagnose}}</div>
      <div class="inline-info">
        <div class="item"><span>身高(cm)：</span>{{ height }}</div>
        <div class="item"><span>体重(kg)：</span>{{ weight }}</div>
        <div class="item"><span>BMI：</span>{{ (weight/(height/100)/(height/100)).toFixed(1) }}</div>
      </div>
    </div>
    <div class="title">▎临床评分</div>
    <div class="block-info">
      <div class="inline-info">
        <div class="item"><span>APACHE：</span>{{ apcheScore }}</div>
        <div class="item"><span>SOFA：</span>{{ sofaScore }}</div>
        <div class="item"><span>Nutric：</span>{{ nutricScore }}</div>
      </div>
    </div>
    <div class="title">▎时间线</div>
    <div class="block-info">
      <div class="inline-info">
        <div class="item"><span>第&nbsp;</span>{{hospId}}<span>&nbsp;次入院</span></div>
        <div class="item"><span>住院天数：</span>{{ hospLosDay }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>入院类型：</span>{{ hospitalAdmitType }}</div>
        <div class="item"><span>入院科别：</span>{{ hospitalAdmitPlace }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>入院时间：</span>{{ hospitalAdmitTime }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>入院诊断：</span>
          <div class="hosp-diag">
            {{hospitalAdmitDiagnose}}
          </div>
        </div>
      </div>
      <div class="inline-info">
        <div class="item"><span>出院时间：</span>{{ hospitalDischargeTime }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>出院主要诊断：</span>
          <div class="hosp-diag hosp-diag-out">
            {{hospitalDischargeMainDiagnose}}
          </div>
        </div>
      </div>
      <div class="inline-info">
        <div class="item"><span>出院其他诊断：</span>
          <div class="hosp-diag hosp-diag-out">
            {{hospitalDischargeOtherDiagnose}}
          </div>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="inline-info">
        <div class="item"><span>第</span>
<!--          <button @click="icuIdSub" :disabled="isSubDis"><span>&lt;</span></button>-->
          {{icuId}}
<!--          <button @click="icuIdAdd" :disabled="isAddDis"><span>&gt;</span></button>-->
          <span>次入ICU</span>
        </div>
        <div class="item"><span>ICU天数：</span>{{ icuLosDay }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>入ICU时间：</span>{{ icuAdmitTime }}</div>
      </div>

      <div class="inline-info">
        <div class="item"><span>出ICU时间：</span>{{ icuDischargeTime }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>再入ICU：</span>{{ icuReadmit }}</div>
      </div>
      <div class="split-line"></div>
      <div class="inline-info">
        <div class="item"><span>第</span>
          <button @click="ventIdSub" :disabled="isVentSubDis"><span>&lt;</span></button>
          {{ventId}}
          <button @click="ventIdAdd" :disabled="isVentAddDis"><span>&gt;</span></button>
          <span>次通气</span>
        </div>
        <div class="item"><span>IV天数：</span>{{ ventLosDay }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>是否气切：</span>{{ istrac }}</div>
        <div class="item"><span>气切时间：</span>{{ tracTime }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>插管时间：</span>{{ intubateTime }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>拔管时间：</span>{{ extubateTime }}</div>
      </div>
      <div class="inline-info">
        <div class="item"><span>拔管失败：</span>{{ extubateFail }}</div>
      </div>
    </div>
    <div class="title">▎结局</div>
    <div class="inline-info">
      <div class="item"><span>死亡：</span>{{ dead }}</div>
      <div class="item"><span>死亡时间：</span>{{ deathTime }}</div>
    </div>
<!--    <div class="inline-info">-->
<!--      <div class="item"><span>28天不通气时间：</span>{{ freeFromVent28 }}</div>-->
<!--    </div>-->





  </div>


</div>
</template>

<script>
export default {
  name: "BasicData2",
  data(){
    return{

      icuReadmit: '否',
      totalIcuNum: 1,
      ventId:1,

      // freeFromVent28:26.4,

    }
  },
  computed:{
    gender(){
      return this.$store.state.data.gender
    },
    age(){
      return this.$store.state.data.age
    },
    diagnose(){return this.$store.state.data.diagnose},
    height(){return this.$store.state.data.height},
    weight(){return this.$store.state.data.weight},
    hospId(){return this.$store.state.data.hospId},
    icuId(){return this.$store.state.data.icuId},
    // ventId(){return this.$store.state.data.ventId},
    totalVentNum(){return this.$store.state.data.totalVentNum},
    hospitalAdmitType(){return this.$store.state.data.hospitalAdmitType},
    hospitalAdmitPlace(){return this.$store.state.data.hospitalAdmitPlace},
    hospitalAdmitTime(){return this.$store.state.data.hospitalAdmitTime},
    hospitalAdmitDiagnose(){return this.$store.state.data.hospitalAdmitDiagnose},
    hospitalDischargeTime(){return this.$store.state.data.hospitalDischargeTime},
    hospitalDischargeMainDiagnose(){return this.$store.state.data.hospitalDischargeMainDiagnose},
    hospitalDischargeOtherDiagnose(){return this.$store.state.data.hospitalDischargeOtherDiagnose},
    icuAdmitTime(){return this.$store.state.data.icuAdmitTime},
    icuDischargeTime(){return this.$store.state.data.icuDischargeTime},
    intubateTime(){return this.$store.state.data.intubateTime[this.ventId-1]},
    extubateTime(){return this.$store.state.data.extubateTime[this.ventId-1]},
    istrac(){return this.$store.state.data.istrac[this.ventId-1]==1?'是':'否'},
    tracTime(){return this.$store.state.data.tracTime[this.ventId-1]==null?'--':this.$store.state.data.tracTime[this.ventId-1]},
    extubateFail(){return this.$store.state.data.extubateFail[this.ventId-1]==1?'是':'否'},
    apcheScore(){return this.$store.state.data.apcheScore},
    sofaScore(){return this.$store.state.data.sofaScore},
    nutricScore(){return this.$store.state.data.nutricScore},
    dead(){return this.$store.state.data.dead},
    deathTime(){return this.$store.state.data.deathTime},
    hospLosDay(){
      let hospitalAdmit = new Date(this.hospitalAdmitTime)
      let hospitalDischarge = new Date(this.hospitalDischargeTime)
      return ((hospitalDischarge.getTime()-hospitalAdmit.getTime())/1000/3600/24).toFixed(1)
    },
    icuLosDay(){
      let icuAdmit = new Date(this.icuAdmitTime)
      let icuDischarge = new Date(this.icuDischargeTime)
      return ((icuDischarge.getTime()-icuAdmit.getTime())/1000/3600/24).toFixed(1)
    },
    ventLosDay(){
      let intubate = new Date(this.intubateTime)
      let extubate = new Date(this.extubateTime)
      return ((extubate.getTime()-intubate.getTime())/1000/3600/24).toFixed(1)
    },
    // isSubDis(){
    //   if(this.icuId==1){
    //     return true
    //   }else{
    //     return false
    //   }
    // },
    // isAddDis(){
    //   if(this.icuId==this.totalIcuNum){
    //     return true
    //   }else{
    //     return false
    //   }
    // },
    isVentSubDis(){
      if(this.ventId==1){
        return true
      }else{
        return false
      }
    },
    isVentAddDis(){
      if(this.ventId==this.totalVentNum){
        return true
      }else{
        return false
      }
    },

  },
  methods:{
    icuIdSub(){
      this.icuId--

    },
    icuIdAdd(){
      this.icuId++
    },
    ventIdSub(){
      this.ventId--

    },
    ventIdAdd(){
      this.ventId++
    },


  }
}
</script>

<style scoped>
  #basic-container2 {
    width: 100%;
    height: 74%;
    margin-top: 18px;
    background-color: #ffffff;
    border-radius: 20px;
  }
  .title{
    width: 30%;
    position: relative;
    padding-top: 3%;
    left:2%;
    font-size: 22px;
    font-weight: bold;
    /*float: left;*/
  }
  .block-info{
    font-size: 18px;
  }
  .inline-info{
    display: flex;
    margin-top: 6px;
    margin-left: 4%;
    font-size: 18px;

  }
  .item{
    flex:1;
  }

  span{
    font-weight: bold;
  }
  .split-line{
    width: 85%;
    border: 1px solid #e3e3e3;
    /*background-color: #909399;*/
    margin-left: 4%;
    margin-top: 1%;
  }
  button{
    background: #fff;
    border: 1px solid #ccc;
    font-size: 20px;
  }
  .hosp-diag{
    float: right;
    margin-right: 10%;
    width: 69%;
    height:28px;
    overflow: auto;
    /*background-color: brown;*/
  }
  .hosp-diag-out{
    width: 61%
  }
</style>