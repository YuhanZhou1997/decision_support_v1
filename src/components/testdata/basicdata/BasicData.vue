<template>
<div id="basic-container">
  <basic-data1/>
  <basic-data2/>

</div>
</template>

<script>
import BasicData1 from "@/components/testdata/basicdata/BasicData1";
import BasicData2 from "@/components/testdata/basicdata/BasicData2";
export default {
name: "BasicData",
  components: {BasicData2, BasicData1}
}
</script>

<style scoped>
  #basic-container {
    width: 22%;
    height: 100%;
    /*background-color: brown;*/
    /*display: flex;*/
    /*justify-content: space-between;*/
  }
</style>