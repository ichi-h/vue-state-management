<template>
  <button @click="onClick">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: String,
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
