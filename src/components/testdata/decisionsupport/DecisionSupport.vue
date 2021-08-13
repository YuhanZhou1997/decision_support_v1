<template>
<div id="decision-support-container">
  <death-risk></death-risk>
  <extubation-risk></extubation-risk>
  <peep-recommendation></peep-recommendation>
  <pva-rate></pva-rate>

</div>
</template>

<script>
import DeathRisk from "@/components/testdata/decisionsupport/DeathRisk";
import ExtubationRisk from "@/components/testdata/decisionsupport/ExtubationRisk";
import PeepRecommendation from "@/components/testdata/decisionsupport/PeepRecommendation";
import PvaRate from "@/components/testdata/testtable/PvaRate";
export default {
  name: "DecisionSupport",
  components: {PvaRate, PeepRecommendation, ExtubationRisk, DeathRisk}
}
</script>

<style scoped>
  #decision-support-container {
    width: 22%;
    /*background-color: blueviolet;*/
  }
</style>