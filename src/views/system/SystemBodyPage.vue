<template>
  <b-container fluid class="system-body-page">
    <TheNavbarDashboard />

    <router-view/>
  </b-container>
</template>

<script>
export default {
  name: 'SystemBodyPage',
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
  components: {
    TheNavbarDashboard: () => import('@components/layout/TheNavbarDashboard')
  },
  computed: {},
  methods: {
    logout () {
      this.logoutEvent()
    }
  },
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.system-body-page {
  height: 100vh;
  background: $gray2;
}
</style>
