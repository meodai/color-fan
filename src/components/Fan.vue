<template lang="pug">
section.fan(v-bind:style="setRotation()")
  blade(v-for="color in colors" track-by="$index" ":color"="color.hex" ":label"="color.name" ":index"="$index" ":total"="colors.length")
</template>

<script>
import Blade from './Blade'

export default {
  components: {
    Blade
  },
  props: {
    colors: Array,
    label: String,
    index: Number,
    active: Number
  },
  created () {
    this.$on('colorChange', (index, label, color) => {
      this.index = index
      if (this.total !== this.colors.length) {
        this.hoverindex.blades.hovered = null
      }
      this.total = this.colors.length
      this.setRotation()
      return true
    })
  },
  methods: {
    setRotation: function () {
      const rotation = (this.index + 1) * (360 / this.total)
      return {
        transform: `translate3d(0,0,0) rotate(${-rotation || 0}deg)`
      }
    }
  }
}
</script>

<style lang="scss">
.fan {
  position: absolute;
  top: 50vh; right: 50vw;
  perspective: 600;
  transition: 450ms transform cubic-bezier(0.370, 0.000, 0.250, 0.980);
}
</style>
