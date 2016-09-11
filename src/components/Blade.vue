<template lang="pug">
article.blade('@click'='setActive' '@mouseover'='hover(index)' ':style'='style()')
  h2.value: strong {{color}}
  h3.label: span.label--inner {{label}}
</template>

<script>
export default {
  props: {
    color: String,
    label: String,
    index: Number,
    total: Number,
    hoverindex: Number
  },
  data: function () {
    return {
      isHovered: false
    }
  },
  methods: {
    style: function () {
      let rotation = (this.index + 1) * (360 / this.total)
      const scale = this.index * 2
      const X = this.hoverindex === this.index ? '-10%' : 0
      /* if (this.hoverindex - 1 === this.index || (this.hoverindex === 0 && this.index == this.total - 1)) {
        rotation -= this.total * .3;
      } else if (this.hoverindex + 1 === this.index || (this.hoverindex === this.total - 1 && this.index === 0)){
        rotation += this.total * .3;
      }*/
      return {
        'transform': `rotate(${rotation}deg) translate3d(0,${X},${scale + 20}px)`,
        'background-color': this.color,
        'color': this.color
        // 'height':  42 - ((this.total / 33) * 13) + 'vh'
      }
    },
    setActive: function (event) {
      this.$dispatch('colorChange', this.index, this.label, this.color)
    },
    hover: function (index) {
      this.shared.hovered = index
      this.style()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/settings';
.blade {
  position: absolute;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40vh; width: 10vh;
  top: -40vh; left: 0;
  box-shadow: 0 0 0 1px rgba($c-white,.15),
              0 0 15px rgba($c-black,.1);
  transform: translate3d(0,0,0) rotate(0deg);
  transform-origin: 1vh 39vh;
  border-radius: .5vh;
  overflow: hidden;
  transition: 200ms 200ms transform ease-in-out;
  transition: 200ms 200ms transform cubic-bezier(0.250, 0.250, 0.275, 1.265);
}
.label, .value {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1vh;
  line-height: 1.2;
}
.label {
  color: $c-white;
  font-size: 1.6vh;
  padding-top: .75vh;
  &--inner {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.value {
  font-size: 1.8vh;
  font-weight: 500;
  line-height: .75;
  text-transform: uppercase;
  background: $c-white;
  color: currentColor;
}
</style>
