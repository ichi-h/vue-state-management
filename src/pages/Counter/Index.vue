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

export default {
  components: { Title, Count, IncrementButton, ResetButton },
}
</script>

<style scoped>
</style>
