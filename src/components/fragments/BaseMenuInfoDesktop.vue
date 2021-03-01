<template>
  <div class="menu-info-desktop text-center">
    <div class="menu-info-desktop__head">
      <b-dropdown size="lg" class="m-3 btn btn-lg">
        <template #button-content>
          <span class="menu-info-desktop__head--support">
            <font-awesome-icon :icon="['far', 'question-circle']" /> {{ $t('components.BaseMenuInfoDesktop.btnMessage') }}
          </span>
        </template>
        <b-dropdown-item>{{ $t('components.BaseMenuInfoDesktop.dropdownList.first') }}</b-dropdown-item>
        <b-dropdown-item>{{ $t('components.BaseMenuInfoDesktop.dropdownList.second') }}</b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="menu-info-desktop__progress">
      progress Bar
    </div>

    <div class="menu-info-desktop__status">

      <div class="menu-info-desktop__status--about text-left">
        <p class="menu-info-desktop__status--about--title" v-if="status === 'delivering' || status === null">
          {{ $t('components.BaseMenuInfoDesktop.status.about.title') }}
        </p>
        <h4 class="menu-info-desktop__status--about--success text-center" v-else>
          {{ $t('components.BaseMenuInfoDesktop.status.about.titleVelse') }}
        </h4>
        <p
          class="menu-info-desktop__status--about--description">
          {{ $t('components.BaseMenuInfoDesktop.status.about.description.start') }} <strong>{{shipment.company.name}}</strong> {{ $t('components.BaseMenuInfoDesktop.status.about.description.middle') }} <strong>{{ $t('components.BaseMenuInfoDesktop.status.about.description.action') }}</strong> {{ $t('components.BaseMenuInfoDesktop.status.about.description.preposition') }} <strong>{{ $t('components.BaseMenuInfoDesktop.status.about.description.address') }}</strong>
        </p>
      </div>

      <div class="menu-info-desktop__status--location text-left ">
        <div class="menu-info-desktop__status--location--content">
          <span class="menu-info-desktop__status--location--content--icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
          <span class="inline">{{shipment.location.address}}</span>
          <span class="inline" style="margin-left: 20px">{{shipment.location.district}}</span>
        </div>
      </div>

      <b-container class="menu-info-desktop__status--shippments">
        <b-row>
          <b-col md="4">
            <BaseDonut
            :runAnimation="runAnimation"
            :message="`Falta ${shipment.pendingShipment} Entrega`"
            newMessage="Completo"/>
          </b-col>

          <b-col md="8">
            <div class="menu-info-desktop__status--shippments--infos">
              <ul>
                <li>
                  <span class="font-weight">{{ $t('components.BaseMenuInfoDesktop.status.shippments.shipment') }}</span><span style="color: #e63b4f">{{ shipment.number }}</span>
                </li>
                <li><span class="font-weight">{{ $t('components.BaseMenuInfoDesktop.status.shippments.current') }}</span>{{ shipment.currentShipment }}</li>
                <li><span class="font-weight">{{ $t('components.BaseMenuInfoDesktop.status.shippments.measure') }}</span> {{ shipment.measures }}</li>
                <li><span class="font-weight">{{ $t('components.BaseMenuInfoDesktop.status.shippments.truckdriver') }}</span> {{ shipment.truckDriver }}</li>
                <li><span class="font-weight">{{ $t('components.BaseMenuInfoDesktop.status.shippments.estimatedTime') }}</span> 16:30 - 17:50</li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <div class="menu-info-desktop__status--distance text-left ">
        <div class="menu-info-desktop__status--location--content">
          <p><strong>{{ $t('components.BaseMenuInfoDesktop.status.distance.distance') }}</strong> {{distance}} km</p>
          <p class="ml-30"><strong>{{ $t('components.BaseMenuInfoDesktop.status.distance.duration') }}</strong> ≈ {{duration}}</p>
        </div>
      </div>

      <div class="menu-info-desktop__status--historic">
        <p class="default-title"><font-awesome-icon :icon="['fa', 'undo']" style="margin-right: 10px"/>{{ $t('components.BaseMenuInfoDesktop.status.historic') }}</p>
        <ul>
          <li v-for="historic in shipment.historics" :key="historic.id">
            <p>{{historic.message}}</p>
            <span>{{historic.date}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseMenuInfoDesktop',
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
      status: null,
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
  methods: {
    setValues (value) {
      this.distance = value.distance
      this.duration = value.duration
      this.status = value.status
    },
    udpateMockDatas () {
      this.shipment.historics.push({ id: 4, message: 'Produto Entregue', date: '15/08 - 17:50' })
    }
  },
  filters: {},
  watch: {
    liveDatas (value) {
      if (value) this.setValues(value)
      if (value.status === 'delivered') {
        this.runAnimation = true
        this.udpateMockDatas()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-info-desktop {
  position: absolute;
  top: 0;
  left: 0;
  right: -30px;
  bottom: 0;
  z-index: 99;
  background: #fff;
  padding: 0 15px;
  box-shadow: 13px 1px 5px -4px rgb(0 0 0 / 35%);
  overflow: auto;
  .menu-info-desktop__head {
    &--support {
      font-size: 15px;
    }
  }

  .menu-info-desktop__status {

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

    &--location{
      margin: 20px 0;
      &--content {
        &--icon {
          border-bottom: 2px solid black;
          margin-right: 8px;
          font-size: 18px;
        }

        p {
          font-size: 17px;
          font-weight: 100;
        }
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

    &--historic {
      border: 2px solid #e63b4f;
      border-radius: 6px;
      padding-top: 10px;
      overflow-y: auto;

      ul {
        list-style: none;
        text-align: left;

        li {
          margin-bottom: 10px;

          p {
            font-weight: 600;
            margin-bottom: 0;
          }
          span {
            font-weight: 100;
          }
        }
      }
    }
  }
}

.inline {
  display: inline-block;
}

.font-weight {
  font-weight: 700;
  padding-right: 5px;
}
</style>
