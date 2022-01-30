<template>
  <div>
    <Title>すごいカウント</Title>
    <Count />
    <IncrementButton />
    <ResetButton />
  </div>
</template>

<script>
import Title from "../../components/uiParts/Title.vue";
import Count from "./Count.vue";
import IncrementButton from "./IncrementButton.vue";
import ResetButton from "./ResetButton.vue";

import store from "../../store";
import { COUNTER__INITIALIZE } from "../../store/counter/actions.msg";

export default {
  components: { Title, Count, IncrementButton, ResetButton },
  mounted: function () {
    store.dispatch(COUNTER__INITIALIZE);
  },
}
</script>

<style scoped>
</style>
