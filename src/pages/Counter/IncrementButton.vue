<template>
  <Button value="Increment" @click="increment" />
</template>

<script>
import Button from "../../components/uiParts/Button.vue";

import store from "../../store";
import { COUNTER__INCREMENT } from "../../store/counter/actions.msg";

export default {
  components: { Button },
  methods: {
    increment: function () {
      store.dispatch(COUNTER__INCREMENT);
    },
  },
}
</script>

<style scoped>
</style>
