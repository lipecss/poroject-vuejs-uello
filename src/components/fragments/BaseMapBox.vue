<template>
  <div id="map"></div>
</template>

<script>

import { convertDistance, returnDuration } from '../../helpers/functions'
import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { locationsPoint } from '@enums/locations'

export default {
  name: 'BaseMapBox',
  beforeCreate () {},
  created () {},
  mounted () {
    this.createMap()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.667965, -23.631854],
      distance: '',
      duration: ''
    }
  },
  props: {},
  components: {},
  computed: {},
  methods: {
    createMap () {
      // Inicializa o Mapa
      var map = new mapboxgl.Map({
        accessToken: this.accessToken,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-46.667965, -23.631854],
        zoom: 15,
        minZoom: 14,
        maxZoom: 25
      })

      // Prearando para utilizar MapboxDirections

      const directions = new MapboxDirections({
        accessToken: this.accessToken,
        interactive: false,
        controls: {
          inputs: false,
          instructions: false,
          profileSwitcher: false
        },
        unit: 'metric',
        profile: 'mapbox/driving'
      })

      /* Aqui add o painel para testes dentro do canvas
        contudo, estou bloqueando por padrao a interação, e os inputs
      */
      map.addControl(directions, 'top-left')

      const startPoint = locationsPoint[locationsPoint.length - 1]
      const endPoint = locationsPoint[0]

      // --- Eventos do mapa ---

      // Evento disarado após o mapa carregar totalmemte
      map.on('load', async () => {
        /* Quando o mapa carregar, add os dois pontos.
          Aqui mockei os dois valores: Origem e Destino
        */
        directions.setOrigin(startPoint)
        directions.setDestination(endPoint)

        new mapboxgl.Marker()
          .setLngLat(startPoint)
          .addTo(map)

        /* Com o intuito de simular o entregador andando, criei um Interval simples.
         É possivel fazer com dados reais vindo do aparelho, e o MapboxDirections se vira pegando as rotas possiveis
        */

        // Cria o elemento marker do carrinho
        const el = document.createElement('div')
        el.className = 'marker'

        const marker = new mapboxgl.Marker({
          element: el,
          rotationAlignment: 'auto',
          rotation: -14,
          pitchAlignment: 'auto'
        })

        // Faz o entregador andar
        const length = locationsPoint.length
        let count = 0

        const timer = setInterval(() => {
          if (count === length) {
            this.isComplete = true
            clearInterval(timer)
          } else {
            const current = locationsPoint[count]
            marker.remove()

            marker.setRotation(locationsPoint[count][2])

            directions.setDestination(current)
            marker.setLngLat(current).addTo(map)

            map.flyTo({
              center: current,
              essential: true
            })

            count += 1
          }
        }, 2000)
      })

      /* Evenntos do MapboxDirections
        Esse evento diparada a cada atualização que houver nas directions
      */
      // const newArray = []
      directions.on('route', async (e) => {
        const summary = e.route[0]

        // Passo os valores para as funções de conversao e entao atribuo ao data
        const distance = await convertDistance(summary.distance)
        const duration = await returnDuration(summary.duration)

        const status = {
          distance,
          duration,
          status: distance <= 0 ? 'delivered' : 'delivering'
        }

        this.$emit('apiStatus', status)
      })
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 93vh;
}
canvas:focus {
  outline: none;
  border: none
}
.marker {
  background-image: url('~@assets/truck.png');
  background-size: cover;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
