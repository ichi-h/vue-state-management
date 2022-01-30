<template>
  <p>{{ $store.state.counter.count }}</p>
</template>

<script>
import store from "../../store";
import { INITIALIZE } from "../../store/counter/actions.msg";

export default {
  mounted: function () {
    store.dispatch(INITIALIZE);
  },
}
</script>

<style scoped>
p {
  font-size: large;
  font-weight: bold;
  text-align: center;
}
</style>
