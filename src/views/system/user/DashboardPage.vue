<template>
  <div>
    <BaseMenuInfoMobile
    :shipment="shipment"
    :liveDatas="liveDatas"
    class="d-block d-sm-block d-md-block d-lg-block d-xl-none"/>
    <b-row>
      <b-col lg="12" class="d-none d-md-none d-xl-block text-right">
        <h4 class="default-title mt-10-mb-10">| Fulano de Tal da Silva</h4>
      </b-col>
    </b-row>
    <b-row class="dashborad-page">
      <b-col lg="12" class="dashborad-page__content">
        <b-row>
          <b-col sm="3" xl="3" class="d-none d-md-none d-xl-block">
            <div class="dashborad-page__content-info">
              <BaseMenuInfoDesktop :shipment="shipment" :liveDatas="liveDatas"/>
            </div>
          </b-col>
          <b-col sm="12" xl="9">
            <div class="dashborad-page__content-map">
              <BaseMapBox @apiStatus="datasFromAPI"/>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { shipment } from '@enums/shipment'
export default {
  name: 'UserDashboardPage',
  metaInfo () {
    return {
      title: this.$t('pages.system.user.dashboardPage.html.title')
    }
  },
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
      shipment: shipment,
      liveDatas: null
    }
  },
  props: {},
  components: {
    BaseMenuInfoMobile: () => import('@components/fragments/BaseMenuInfoMobile'),
    BaseMenuInfoDesktop: () => import('@components/fragments/BaseMenuInfoDesktop'),
    BaseMapBox: () => import('@components/fragments/BaseMapBox')
  },
  computed: {},
  methods: {
    datasFromAPI (data) {
      this.liveDatas = data
    }
  },
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.dashborad-page {
  .dashborad-page__content {
    padding-top: 70px;
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
    overflow-y: auto;
  }
  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {}
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1400px) {
    .dashborad-page__content {
      padding-top: 0;
      padding-left: 85px;
      padding-right: 15px;

      .dashborad-page__content-info {
        height: 93vh;
        position: relative;
      }
    }
  }
  @media screen and (min-width: 1600px) {}
}
</style>
