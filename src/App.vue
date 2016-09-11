<template lang="pug">
  .app-warp.background(':style'='{background: value}')
    header.header
      h1.title.js-title {{title}}
      h2.sub.js-value {{value}}
    slot
</template>

<script>
export default {
  props: {
    title: String,
    value: String
  },
  created () {
    this.$on('colorChange', (index, label, color) => {
      this.title = label
      this.value = color
      this.$broadcast('colorChange', index, label, color)
    })
  }
}
</script>

<style lang="scss">
@import '~minireset.css/minireset';
@import 'style/settings';

body, html {
  font-family: $t-code;
  height: 100%;
  font-size: calc(0.5rem + 1.4vh);
}
</style>

<style lang="scss" scoped>
@import 'style/settings';
.header {
  padding: 1rem;
}
.title {
  font-size: 2rem;
  margin-bottom: 0.15em;
}
.sub {
  font-family: $t-code;
}
</style>
