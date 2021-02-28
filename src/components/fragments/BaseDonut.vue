<template>
  <div class="donut">
    <div class="insider">
      <vc-donut v-bind="props" :size="size" :background="background" :foreground="foreground">
        <p :style="`color: ${color}`" v-if="!runAnimation">{{ message }}</p>
        <p :style="`color: ${color}`" v-else>{{ newMessage }}</p>
      </vc-donut>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeroImage',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    // this.updateChart()
  },
  beforeUpdate () {},
  updated () {},
  destroyed () {},
  data () {
    return {
      isChartsUpdated: false,
      props: {
        sections: [
          { value: 75, color: this.sectionColor }
        ],
        thickness: this.thickness
      }
    }
  },
  props: {
    message: { type: String, default: '' },
    size: { type: Number, default: 100 },
    sectionColor: { type: String, default: '#0b4f6c' },
    color: { type: String, default: '#0b4f6c' },
    background: { type: String, default: '#fff' },
    foreground: { type: String, default: '#ebebf0' },
    thickness: { type: Number, default: 10 },
    runAnimation: { type: Boolean, default: false },
    newMessage: { type: String, default: '' }
  },
  coponents: {},
  computed: {},
  methods: {
    updateChart () {
      const section = this.props.sections[0]
      section.value = 0
      this.isChartsUpdated = true

      const timer = setInterval(() => {
        section.value += 10

        if (section.value === 100) {
          clearInterval(timer)
        }
      }, 100)
    }
  },
  filters: {},
  watch: {
    runAnimation (value) {
      if (value === true) this.updateChart()
    }
  }
}
</script>

<style lang="scss" scoped>
.donut {
  position: absolute;
  p {
    padding-top: 20px;
    font-size: 16px;
    font-weight: 300;
  }
  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {
    position: relative;
  }
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {}
  @media only screen and (oriantation: landscape) and (device-width: 1024px) and ( min-resolution: 116dpi),
  only screen and (oriantation: portrait) and (device-height: 1024px) and ( min-resolution: 116dpi) {
    left: 0;
  }
  @media screen and (min-width: 1600px) {
    left: unset;
  }
}
</style>
