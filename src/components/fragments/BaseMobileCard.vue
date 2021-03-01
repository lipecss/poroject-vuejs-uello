<template>
  <div class="card-info-mobile" :class="{ expandable: toDown }">
    <div class="card-info-mobile__header text-left" @click="expand">
      <p
        class="menu-info-desktop__status--about--description" v-if="status === 'delivering'">
        Seu pedido da <strong>{{ shipment.company.name }}</strong> saiu para entrega, e será <strong>entregue</strong> no <strong>endereço</strong>
      </p>
      <p
        class="menu-info-desktop__status--about--description" v-else>
        Seu pedido da <strong>{{ shipment.company.name }}</strong> foi <strong>entregue</strong> com sucesso no <strong>endereço</strong>
      </p>
    </div>

    <div class="card-info-mobile__content">

      <div class="card-info-mobile__content--location text-left ">
        <div class="card-info-mobile__content--location--inner">
          <span class="card-info-mobile__content--location--inner--icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
          <p class="inline" style="position: absolute; top: 0;">{{ shipment.location.address }}</p>
          <p class="inline">{{ shipment.location.district }}</p>
        </div>
      </div>

      <div class="card-info-mobile__content--about text-left">
        <p class="card-info-mobile__content--about--title text-center" v-if="status === 'delivering' || status === null">Saiu para Entrega</p>
        <h4 class="card-info-mobile__content--about--success text-center" v-else>🎉 Parabéns - Pedido Entregue 🎉</h4>
      </div>

      <div class="card-info-mobile__content--shippments--infos">
        <ul>
          <li>
            <span class="font-weight">Sua entrega é a nº:</span><span style="color: #e63b4f">{{shipment.number }}</span>
          </li>
          <li><span class="font-weight">Entrega Atual:</span>{{shipment.currentShipment}}</li>
          <li><span class="font-weight">Quantidade de Volume:</span>{{shipment.measures}}</li>
          <li><span class="font-weight">Motorista:</span>{{shipment.truckDriver}}</li>
          <li><span class="font-weight">Horário Estimado:</span>16:30 - 17:50</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseMobileCard',
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
      toDown: false,
      status: 'delivering',
      distance: 0,
      duration: 0,
      runAnimation: false
    }
  },
  props: {
    shipment: { type: Object, require: true },
    liveDatas: { type: Object }
  },
  components: {},
  computed: {},
  methods: {
    setValues (value) {
      this.distance = value.distance
      this.duration = value.duration
      this.status = value.status
    },
    expand () {
      this.toDown = !this.toDown
    }
  },
  filters: {},
  watch: {
    liveDatas (value) {
      if (value) this.setValues(value)
      if (value.status === 'delivered') {
        this.runAnimation = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-info-mobile {
  position: fixed;
  width: 90%;
  height: 190px;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border-radius: 6px;
  color: #000;
  font-size: 11px;
  z-index: 99;
  overflow-y: scroll;

  .card-info-mobile__header {
    background: $primary;
    color: #fff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    font-size: 13px;
    font-weight: 400;
    padding: 15px;
    height: 70px;
  }

  .card-info-mobile__content {
    padding: 10px;

    &--location {
      &--inner {
        position: relative;
        &--icon {
          border-bottom: 2px solid black;
          margin-right: 8px;
          font-size: 18px;
        }
        p {
          font-size: 11px;
          font-weight: 100;
          margin-left: 20px;
        }
      }
    }

    &--about {
      background: #0b4f6c;
      padding: 10px 15px;
      color: #fff;
      border-radius: 6px;

      &--title {
        font-size: 20px;
        text-transform: uppercase;
        margin-bottom: 5px;
      }

      &--success {
        color: #fcff3a
      }

      &--description {
        font-size: 15px;
        margin-bottom: 0;
      }
    }

    &--shippments {
      &--infos {
        text-align: left;
        ul {
          list-style: none;
          padding: 0;

          li {
            font-weight: 600px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {
    .card-info-mobile__header {
      font-size: 18px;
    }
    .card-info-mobile__content {
      &--location {
        &--inner {
          p {
            font-size: 18px;
          }
        }
      }

      &--about {
        margin-bottom: 20px;
        &--title {
          font-size: 18px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        &--description {
          font-size: 18px;
          margin-bottom: 0;
        }
      }

      &--shippments {
        &--infos {
          ul {
            li {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1400px) {}
  @media screen and (min-width: 1600px) {}
}

.expandable {
  overflow: none;
  transform: translateY(171px);
  transition: all .5s ease-in-out;
 }
</style>
