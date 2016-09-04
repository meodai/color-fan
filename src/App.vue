<template lang="pug">
  #app
    hello
    .bla {{test}}
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  data () {
    return {
      test: 'haha'
    }
  }
}
</script>

<style lang="scss">
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

</style>
