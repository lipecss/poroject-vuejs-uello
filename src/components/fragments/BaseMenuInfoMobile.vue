<template>
  <b-container class="menu-info-mobile">
    <b-row class="mt-1 mt-sm-2">
      <b-col cols="5" sm="5" class="menu-info-mobile__status--shippments text-center">
        <BaseDonut
        :runAnimation="runAnimation"
        :message="`Falta ${shipment.pendingShipment} Entrega`"
        newMessage="Completo"
        color='#fff'
        background="#0b4f6c"
        sectionColor="#02baef"
        :thickness=12 />
      </b-col>
      <b-col cols="7" sm="7" class="menu-info-mobile__status--shippments--infos">
        <div>
          <ul style="display: flex; list-style: none;">
            <li v-for="i in 4" :key="i">{{i}}</li>
          </ul>
        </div>
        <div class="">
          <p>Status do pedido: Saiu para Entrega</p>
          <p>Horário estimádo: 16:34 - 18:00</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BaseMenuInfoMobile',
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
  components: {
    BaseDonut: () => import('@components/fragments/BaseDonut')
  },
  computed: {},
  methods: {},
  filters: {},
  watch: {
    liveDatas (value) {
      if (value.status === 'delivered') {
        this.runAnimation = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-info-mobile {
  position: absolute;
  width: 90%;
  height: 120px;
  top: 90px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: #0b4f6c;
  border-radius: 6px;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  z-index: 99;

  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {
    font-size: 13px;
  }
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1400px) {}
  @media screen and (min-width: 1600px) {}
}
</style>
