<template>
  <div id="container">
    <basic-data/>
    <test-table/>
    <decision-support/>

  </div>
</template>

<script>
import BasicData from "@/components/testdata/basicdata/BasicData";
import TestTable from "@/components/testdata/testtable/TestTable";
import DecisionSupport from "@/components/testdata/decisionsupport/DecisionSupport";
export default {
  name: "TestData",
  components: {DecisionSupport, TestTable, BasicData}
}
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    /*background-color: aqua;*/
    display: flex;
  }
</style>