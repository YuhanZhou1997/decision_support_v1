<template>
  <div class="screen-container">
    <Header/>
    <test-data/>
    <select-patient></select-patient>


  </div>
</template>

<script>
import Header from "@/components/titlebar/Header";
import TestData from "@/components/testdata/TestData";
import SelectPatient from "@/components/select/SelectPatient";

export default {
  name: "Home",
  components: {
    SelectPatient,
    TestData,
    Header
  },
}
</script>

<style scoped>
.screen-container {
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

</style>