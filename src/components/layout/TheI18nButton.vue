<template>
  <div class="i18n">
    <button
    class="i18n--btn"
    v-for="lang in languages"
    :key="lang.flag"
    @click="changeLocale(lang.language)">
      <flag :iso="lang.flag" v-bind:squared="false" />
      <span>{{ $t(`buttons.i18n.${lang.title}`) }}</span>
    </button>
  </div>
</template>

<script>

// TODO - Aterar e permitir que as Línguas sejam dinamicas, via props
export default {
  name: 'Base',
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
      languages: [
        { flag: 'br', language: 'pt-BR', title: 'portuguese' },
        { flag: 'us', language: 'en', title: 'english' }
      ]
    }
  },
  props: {},
  components: {},
  computed: {},
  methods: {
    changeLocale (locale) {
      this.$i18n.locale = locale
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
 .i18n {
  padding: 15px;

  &--btn {
    bottom: 15px;
    right: 20px;

    background: transparent;
    color: $gray;
    border: 1px solid $gray;
    padding: .375rem .75rem;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.5s;

    &:first-child {
      margin-right: 10px;
    }
    &:hover {
      background: $gray;
      color: $hover-secondary;
      transform: translateY(-5px);
    }
  }
}

.flag-icon {
  font-size: 22px;
  margin-right: 10px;
}
</style>
