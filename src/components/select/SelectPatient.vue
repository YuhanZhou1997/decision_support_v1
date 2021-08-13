<template>
  <div>
    <el-tooltip class="item" effect="dark" content="点击选择病人" placement="bottom-end">
      <div id="select-patient" @mousedown="move" @click="changeDisplay">
        <img :src="isDisplay?imgUrlYou:imgUrlZuo" alt="" >
      </div>
    </el-tooltip>
    <div class="table-data" v-show="isDisplay">
<!--      搜索条-->
<!--      <el-col :span="12" class="el-table_headtoolbar" style="height:40px;padding-bottom: 0px;margin-bottom:0px;">-->
<!--        <el-form :inline="true" :model="filters" class="userform" label-width="80px">-->
<!--          <el-form-item label="病历号"  prop="patient_id" style="padding-bottom: 0px;">-->
<!--            <el-input v-model="filters.patient_id" placeholder="病历号"  prefix-icon="el-icon-search"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--      </el-col>-->
      <el-table :data="tableData"
                ref="myTable"
                max-height="850"
                :header-cell-style="headerStyle"
                :row-style="rowStyle"
                :cell-style="cellStyle"
                @row-dblclick="handleDbClick"
      >
        <el-table-column prop="patient_id" label="病历号" width="80"></el-table-column>
        <el-table-column prop="icunum" label="ICU次数" width="90"></el-table-column>
        <el-table-column prop="diag" label="诊断" width="180"></el-table-column>
        <el-table-column prop="intime" label="入ICU时间" width="150"></el-table-column>
<!--        <el-table-column prop="outtime" label="出ICU时间" width="150"></el-table-column>-->

      </el-table>
    </div>


  </div>
</template>

<script>
import {patientlist, patientdata} from "@/network/request";
// import axios from "axios";
export default {
name: "SelectPatient",
  data(){
    return{
      filters: {
        patient_id: ''
      },
      imgUrlZuo:require('../../assets/img/select/you.png'),
      imgUrlYou:require('../../assets/img/select/zuo.png'),
      allData:null,
      tableData:[],
      columnList: ['病历号', 'ICU次数', '诊断', '入ICU时间', '出ICU时间'],
      isDisplay:false,
      pageSize: 30,
      currentPage: 1,
      totalPage:0,
      selectPatient:{},

    }
  },

  created() {

    this.getData()
  //数据过多，采用懒加载方式
  },
  mounted() {
    this.tableListener()
  },
  methods: {
    changeDisplay() {
      this.isDisplay = !this.isDisplay
    },
    move(e) {
      let odiv = e.target;        //获取目标元素
      let disY = e.clientY - odiv.offsetTop;

      document.onmousemove = (e) => {       //鼠标按下并移动的事件
                                            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置

        let top = e.clientY - disY;

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        // console.log(left);

        //移动当前元素
        odiv.style.top = top + 'px';


      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    getData() {
      patientlist().then(res => {
        this.allData = res.data
        this.totalPage = this.allData.length / this.pageSize
        let data = this.allData.splice((this.currentPage - 1) * this.pageSize, this.pageSize)
        this.tableData = this.tableData.concat(data);

      })
    },
    loadData() {
      let data = this.allData.splice((this.currentPage - 1) * this.pageSize, this.pageSize)
      this.tableData = this.tableData.concat(data);
      // console.log(this.tableData);
    },
    tableListener() {
      // console.log("监听表格dom对象的滚动事件")
      let that = this;

      let dom = that.$refs.myTable.bodyWrapper
      dom.addEventListener("scroll", function () {
        const scrollDistance = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
        // console.log("scroll", scrollDistance)
        if (scrollDistance <= 0) {//等于0证明已经到底，可以请求接口
          if (that.currentPage < that.totalPage) {//当前页数小于总页数就请求
            that.currentPage++;//当前页数自增
            //请求接口的代码
            that.loadData()
          }
        }
      })
    },
    headerStyle() {
      return {
        background: 'rgba(59, 182, 178, 0.5)',
        fontSize: '16px',
        color: 'black',
        textAlign: 'center',
      }
    },
    rowStyle(){
      return{
        background:'rgb(216,243,235)',
        // background:'#606266',
        color:'black',
        border:'2px',


      }
    },
    cellStyle(){
      return{
        textAlign: 'center',
        fontSize: '15px',
        borderColor: 'rgb(198,202,203)'

      }
    },
    handleDbClick(row){
      // console.log(row, event, column);
      // console.log(row.patient_id);
      // console.log(row.icunum);
      this.selectPatient.patient_id = row.patient_id;
      this.selectPatient.icunum = row.icunum;
      //列表界面消失
      this.isDisplay=false
      patientdata({
        patient_id: this.selectPatient.patient_id,
        icunum: this.selectPatient.icunum
      }).then(
          res => {
            let date=[]
            let peep=[]
            let fio2=[]
            let vt=[]
            let pplat=[]
            let po2=[]
            let pco2=[]
            let pf=[]
            let spo2_bg=[]
            let temp=[]
            let ph=[]
            let hr=[]
            let spo2=[]
            let dbp=[]
            let sbp=[]
            let mbp=[]
            for (let i=0,len=res.data['DATA'].length; i<len; i++){

              date.push(res.data['DATA'][i].time)
              peep.push(res.data['DATA'][i].peep)
              fio2.push(res.data['DATA'][i].fio2)
              vt.push(res.data['DATA'][i].VT)
              pplat.push(res.data['DATA'][i])
              po2.push(res.data['DATA'][i])
              pco2.push(res.data['DATA'][i])
              pf.push(res.data['DATA'][i])
              spo2_bg.push(res.data['DATA'][i])
              temp.push(res.data['DATA'][i])
              ph.push(res.data['DATA'][i])
              hr.push(res.data['DATA'][i])
              spo2.push(res.data['DATA'][i])
              dbp.push(res.data['DATA'][i])
              sbp.push(res.data['DATA'][i])
              mbp.push(res.data['DATA'][i])

            }

            let ventstarttime=[]
            let ventendtime=[]
            let intubatetime=[]
            let extubatetime=[]
            let istrac = []
            let tractime = []
            let extubateFail = []
            for (let i=0,len=res.data['VentInfo'].length; i<len; i++){

              ventstarttime.push(res.data['VentInfo'][i].ventstarttime)
              ventendtime.push(res.data['VentInfo'][i].ventendtime)
              intubatetime.push(res.data['VentInfo'][i].intubatetime)
              extubatetime.push(res.data['VentInfo'][i].extubatetime)
              istrac.push(res.data['VentInfo'][i].trach)
              tractime.push(res.data['VentInfo'][i].trach_time)
              extubateFail.push(res.data['VentInfo'][i].extubatefail)

            }
            let newData = {
              patient_id: this.selectPatient.patient_id,
              age: res.data['ICUInfo'][0].age,
              gender: res.data['ICUInfo'][0].gender==1?'男':'女',
              diagnose: res.data['ICUInfo'][0].diag,
              height: res.data['ICUInfo'][0].height,
              weight: res.data['ICUInfo'][0].weight,
              hospId: res.data['ICUInfo'][0].hospnum,
              icuId: res.data['ICUInfo'][0].icunum,
              ventId: 1,
              totalVentNum: res.data['VentInfo'].length,
              istrac:istrac,
              tracTime:tractime,
              extubateFail:extubateFail,
              apcheScore: res.data['ICUInfo'][0].apache,
              sofaScore: res.data['ICUInfo'][0].sofa,
              nutricScore: res.data['ICUInfo'][0].nutric,
              dead:res.data['ICUInfo'][0].deathtime==null?'否':'是',
              deathTime:res.data['ICUInfo'][0].deathtime==null?'--':res.data['ICUInfo'][0].deathtime,
              hospitalAdmitType: res.data['ICUInfo'][0].admissiontype,
              hospitalAdmitPlace:res.data['ICUInfo'][0].hospinplace,
              hospitalAdmitDiagnose:res.data['ICUInfo'][0].indiag,
              hospitalDischargeMainDiagnose:res.data['ICUInfo'][0].outmaindiag,
              hospitalDischargeOtherDiagnose:res.data['ICUInfo'][0].outotherdiag,
              hospitalAdmitTime: this.inTimeCorrect(res),
              hospitalDischargeTime: this.outTimeCorrect(res),
              icuAdmitTime: res.data['ICUInfo'][0].intime,
              icuDischargeTime: res.data['ICUInfo'][0].outtime,
              ventStartTime: ventstarttime,
              ventEndTime: ventendtime,
              intubateTime: intubatetime,
              extubateTime: extubatetime,
              date:date,
              PEEP:peep.map((item)=>{return item==0?null:item}),
              FiO2:fio2.map((item)=>{return item==0?null:item}),
              Vt:vt.map((item)=>{return item==0?null:item}),
              Pplat:pplat.map((item)=>{return item==0?null:item}),
              PaO2:po2.map((item)=>{return item==0?null:item}),
              PaCO2:pco2.map((item)=>{return item==0?null:item}),
              PF:pf.map((item)=>{return item==0?null:item}),
              SpO2_bg:spo2_bg.map((item)=>{return item==0?null:item}),
              Temprature:temp.map((item)=>{return item==0?null:item}),
              PH:ph.map((item)=>{return item==0?null:item}),
              HR:hr.map((item)=>{return item==0?null:item}),
              SpO2:spo2.map((item)=>{return item==0?null:item}),
              DBP:dbp.map((item)=>{return item==0?null:item}),
              SBP:sbp.map((item)=>{return item==0?null:item}),
              MBP:mbp.map((item)=>{return item==0?null:item}),
              deathRisk:fio2.map((item)=>{return item==0?null:item}),
              extubeteRisk:fio2.map((item)=>{return item==0?null:item}),
              peepRecommendation:peep.map((item)=>{return item==0?null:item}),
              IEEE:ph.map((item)=>{return item==0?null:item}),
              DT:ph.map((item)=>{return item==0?null:item}),
              ShortCycle:ph.map((item)=>{return item==0?null:item}),
              ProlongedCycle:ph.map((item)=>{return item==0?null:item}),
            }
            console.log(peep.map((item)=>{return item==0?null:item}));
            this.$store.commit('setData',newData)

          }
      )

    },
    inTimeCorrect(res){
      let hospintime = new Date(res.data['ICUInfo'][0].hospintime)
      let icuintime = new Date(res.data['ICUInfo'][0].intime)
      return hospintime.getTime()<icuintime.getTime()?res.data['ICUInfo'][0].hospintime:res.data['ICUInfo'][0].intime
    },
    outTimeCorrect(res){
      let hospouttime = new Date(res.data['ICUInfo'][0].hospouttime)
      let icuouttime = new Date(res.data['ICUInfo'][0].outtime)
      return hospouttime.getTime()>icuouttime.getTime()?res.data['ICUInfo'][0].hospouttime:res.data['ICUInfo'][0].outtime
    },
  },


}
</script>

<style scoped>
  #select-patient{
    float: left;
    width: 40px;
    height: 30px;
    line-height: 30px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 2px solid rgb(7, 47, 94);
    border-left: 0px;
    background-color: rgba(59, 182, 178, 0.5);
    position: fixed;
    top: 6%;
    left:0;
  }
  img{
    height: 23px;
    margin-top: 4px;
    margin-left: 13px;
  }
  .table-data{
    /*background-color: #909399;*/
    float: left;
    position: fixed;
    top: 8%;
    left:2%;
    /*border: 2px solid rgb(7, 47, 94);*/
    /*width: 25%;*/
    /*height: 100px;*/
    /*overflow: hidden;*/
  }
  el-table{
    margin-top: 0px;
  }
   /*设置滚动条的宽度*/
  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 10px;
    height:50px;
    background-color: transparent;
  }
   /*设置滚动条的背景色和圆角*/
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb  {
    background-color: rgba(59, 182, 178, 0.5);
    /*width: 10px;*/
    border-radius: 8px;
  }
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-track {
    background-color: rgba(59, 182, 178, 0.1)
  }



</style>