<template lang="pug">
  .app-warp.background(':style'='{background: value}')
    header.app-wrap__header
      h1.app-wrap__title.js-title {{title}}
      h2.app-wrap__sub.js-value {{value}}
    slot
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
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

$c-black: #212121;
$c-white: #fff;
$bg: $c-white;
$golden: 1.61803398875;
$t-code: 'Inconsolata', ipm, Menlo, 'Courier New', monospace;

body, html {
  font-family: $t-code;
  height: 100%;
  font-size: calc(0.5rem + 1.4vh);
}

.app-wrap {
  &__header {
    padding: 1rem;
  }
  &__title {
    //font-family: $t-copy;
    font-size: 2rem;
    margin-bottom: 0.15em;
  }
  &__sub {
    font-family: $t-code;
  }
}
</style>
