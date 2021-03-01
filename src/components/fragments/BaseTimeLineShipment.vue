<template>
  <ul class="base-time-line-shipment" style="">
    <li class="base-time-line-shipment__items" v-for="(step, index) in steps" :key="index">
      <div :class="[ 'base-time-line-shipment__item-icon', step.active ? 'base-time-line-shipment__item-icon--active' : '' ]">
        <font-awesome-icon :icon="[step.iconClass, step.icon]" />
      </div>

      <div class="base-time-line-shipment__item-separator">
        <div :class="[ 'base-time-line-shipment__separator-lines', 'base-time-line-shipment__separator-lines--one', step.active ? 'base-time-line-shipment__separator-line--active' : '' ]"></div>
        <div :class="[ 'base-time-line-shipment__separator-dot', step.active ? 'base-time-line-shipment__separator-dot--active' : '' ]"></div>
        <div v-if="index !== lastItem" :class="[ 'base-time-line-shipment__separator-lines', 'base-time-line-shipment__separator-lines--two', nextStatus(index) ? 'base-time-line-shipment__separator-line--active' : '' ]"></div>
      </div>

      <div :class="[ 'base-time-line-shipment__item-text' ]">
        <p style="">{{step.description}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BaseTimeLineShipment',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
    }
  },
  props: {
    steps: Array
  },
  components: {},
  computed: {
    lastItem () {
      return this.steps.length - 1
    }
  },
  methods: {
    nextStatus (current) {
      if (this.lastItem === current) return false

      const nextIndex = current + 1
      const nextStep = this.steps[nextIndex].active

      return nextStep
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.base-time-line-shipment {
  position: relative;
  display: inline-block;
  min-width: 230px;
  max-height: 105px;
  padding: 0;

  .base-time-line-shipment__items {
    width: 65px;
    display: inline;
    position: relative;
    list-style-type: none;
    float: left;
    text-align: center;

    .base-time-line-shipment__item-icon {
      position: relative;
      color: #d1d1d1;

      &.base-time-line-shipment__item-icon--active {
        color: #d04363;
      }
    }

    .base-time-line-shipment__item-separator {
      position: relative;
      margin-top: 5px;
      margin-bottom: 5px;
      height: 26px;

      .base-time-line-shipment__separator-dot {
        width: 15px;
        height: 15px;
        background: #d1d1d1;
        border-radius: 50%;
        position: absolute;
        left: 39%;
        top: 5px;
        z-index: 1;

        &.base-time-line-shipment__separator-dot--active {
          background: transparent;
          border: 3px solid #d04363;
        }
      }
      .base-time-line-shipment__separator-lines {
        height: 3px;
        position: relative;
        margin-top: 11px;
        background: #d1d1d1;

        &.base-time-line-shipment__separator-line--active {
          background: #d04363;
        }

        &.base-time-line-shipment__separator-lines--one {
          width: 41%;
          float: left;
        }

        &.base-time-line-shipment__separator-lines--two {
          width: 40%;
          float: right;
        }
      }
    }

    .base-time-line-shipment__item-text {
      margin-bottom: 0;
      font-size: 0.7em;
      line-height: 15px;
    }
  }

  @media screen and (min-width: 375px) {
    .base-time-line-shipment__items {
      width: 75px;

      .base-time-line-shipment__item-separator {
        .base-time-line-shipment__separator-lines {
          &.base-time-line-shipment__separator-lines--two {
            width: 44%;
          }
        }
      }

      .base-time-line-shipment__item-text {
        font-size: 0.8em;
        line-height: 17px;
      }
    }
  }
  @media screen and (min-width: 425px) {
    .base-time-line-shipment__items {
      width: 90px;

      .base-time-line-shipment__item-text {
        font-size: 0.9em;
        line-height: 19px;
      }
    }
  }
  @media screen and (min-width: 576px) {
    .base-time-line-shipment__items {
      width: 100px;

      .base-time-line-shipment__item-separator {
        .base-time-line-shipment__separator-lines {
          &.base-time-line-shipment__separator-lines--two {
            width: 47%;
          }
        }
      }

      .base-time-line-shipment__item-text {
        font-size: 1em;
      }
    }
  }
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1600px) {}
}
</style>
