<template>
  <Button value="Reset" @click="reset" />
</template>

<script>
import Button from "../../components/uiParts/Button.vue";

import store from "../../store";
import { RESET } from "../../store/counter/actions.msg";

export default {
  components: { Button },
  methods: {
    reset: function () {
      store.dispatch(RESET);
    },
  },
}
</script>

<style scoped>
</style>
