<template>
  <button @click="onClick" :disabled="disabled">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: String,
    disabled: Boolean,
  },
  methods: {
    onClick: function (e) {
      this.$emit("click", e);
    },
  }
}
</script>

<style scoped>
</style>
