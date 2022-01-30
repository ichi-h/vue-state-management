<template>
  <Button value="Increment" @click="increment" />
</template>

<script>
import Button from "../../components/uiParts/Button.vue";

import store from "../../store";
import { INCREMENT } from "../../store/counter/actions.msg";

export default {
  components: { Button },
  methods: {
    increment: function () {
      store.dispatch(INCREMENT);
    },
  },
}
</script>

<style scoped>
</style>
