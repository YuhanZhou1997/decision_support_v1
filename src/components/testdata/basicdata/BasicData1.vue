<template>
<div id="basic-container1">
  <img src="../../../assets/img/basicdata/patient.png"/>
  <ul>
    <li>病历号：{{pid}}</li>
    <li>姓名：{{name}}</li>
<!--    <li>年龄：{{age}}</li>-->


  </ul>
</div>
</template>

<script>
export default {
  name: "BasicData1",
  data(){
    return {
      name: "xxx",
      // // pid: "5433126",
      // age: "53",
      // gender: "男",
    }
  },
  computed:{
    pid(){
      return this.$store.state.data.patient_id
    },
    age(){
      return this.$store.state.data.age
    },
    gender(){
      return this.$store.state.data.gender
    }

  }
}
</script>

<style scoped>
  #basic-container1 {
    width: 100%;
    height: 15%;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    }
  img {
    height: 110px;
    position: relative;
    left: 8%;
    margin_left: 20px;
    margin-top: 5px;
    width: auto;

  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 20px;
    position: relative;
    margin: 0 auto;
    /*background-color: blanchedalmond;*/
  }
  ul li {
    padding-bottom: 12px;
    padding-left: 0;
    font-size: 25px;
    font-weight: bold;
    margin: 0;
  }
</style>