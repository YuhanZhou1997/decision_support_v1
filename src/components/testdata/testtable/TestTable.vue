<template>
<div id="test-table-container">
  <time-line/>
  <vital-sign></vital-sign>
  <blood-gas></blood-gas>
  <vent-information></vent-information>



</div>
</template>

<script>
import TimeLine from "@/components/testdata/testtable/TimeLine";
import VentInformation from "@/components/testdata/testtable/VentInformation";
import BloodGas from "@/components/testdata/testtable/BloodGas";
import VitalSign from "@/components/testdata/testtable/VitalSign";
export default {
name: "TestTable",
  components: {VitalSign, BloodGas, VentInformation, TimeLine}
}
</script>

<style scoped>
  #test-table-container {
    width: 55%;
    height:100%;
    margin: 0 auto;
    /*background-color: cadetblue;*/
  }
</style>