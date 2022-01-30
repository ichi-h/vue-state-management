<template>
  <Button value="Reset" @click="reset" />
</template>

<script>
import Button from "../../components/uiParts/Button.vue";

import store from "../../store";
import { COUNTER__RESET } from "../../store/counter/actions.msg";

export default {
  components: { Button },
  methods: {
    reset: function () {
      store.dispatch(COUNTER__RESET);
    },
  },
}
</script>

<style scoped>
</style>
