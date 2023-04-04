<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    @input="(v) => $emit('input', v)"
  />
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>
