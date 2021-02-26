<template>
  <b-row class="dashborad-page">
    <b-col lg="12" class="dashborad-page__content">
      <b-row>
        <b-col sm="3" xl="3" class="d-none d-xl-block">
          <div class="color4">
            menu
          </div>
        </b-col>
        <b-col sm="12" xl="9">
          <div class="color7">
            mapa
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
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
    return {}
  },
  props: {},
  components: {},
  computed: {},
  methods: {},
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
  @media screen and (min-width: 768px) {
    .dashborad-page__content {
      padding-top: 0;
      padding-left: 85px;
      padding-right: 15px;
      padding-top: 15px;
      height: 100vh;

    }
  }
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1600px) {}
}
</style>
