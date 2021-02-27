<template>
  <div>
    {{distance}}
    {{duration}}
      <div id="map"></div>
  </div>
</template>

<script>

import { convertDistance, returnDuration } from '../../helpers/functions'
import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

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
      locations: [
        { step: 1, locations: [-46.667944, -23.631864] },
        { step: 2, locations: [-46.672679, -23.64197] },
        { step: 3, locations: [-46.672285, -23.643118] },
        { step: 4, locations: [-46.672739, -23.642616] },
        { step: 5, locations: [-46.673592, -23.640889] },
        { step: 6, locations: [-46.669941, -23.635918] },
        { step: 7, locations: [-46.669941, -23.635918] },
        { step: 8, locations: [-46.669591, -23.635345] },
        { step: 9, locations: [-46.668461, -23.633484] },
        { step: 10, locations: [-46.66831, -23.633789] },
        { step: 11, locations: [-46.66767, -23.633735] },
        { step: 12, locations: [-46.667217, -23.632824] },
        { step: 13, locations: [-46.667965, -23.631854] }
      ],
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
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-46.667965, -23.631854], // starting position [lng, lat]
        zoom: 15,
        minZoom: 14,
        maxZoom: 15
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

      // --- Eventos do mapa ---

      // Evento disarado após o mapa carregar totalmemte
      map.on('load', async () => {
        /* Quando o mapa carregar, add os dois pontos.
          Aqui mockei os dois valores: Origem e Destino
        */
        directions.setOrigin([-46.667965, -23.631854])
        directions.setDestination([-46.670797, -23.639712])

        new mapboxgl.Marker()
          .setLngLat([-46.667965, -23.631854])
          .addTo(map)

        /* Com o intuito de simular o entregador andando, criei um Interval simples.
         É possivel fazer com dados reais vindo do aparelho, e o MapboxDirections se vira pegando as rotas possiveis
        */

        // Cria o elemento marker do carrinho
        const el = document.createElement('div')
        el.className = 'marker'

        const marker = new mapboxgl.Marker(el)

        // Faz o entregador andar
        const length = this.locations.length
        let count = 0

        const timer = setInterval(() => {
          count += 1
          if (count === length) {
            clearInterval(timer)
          } else {
            const current = this.locations[count].locations
            directions.setDestination(current)
            marker.setLngLat(current).addTo(map)
            // marker.remove()
          }
        }, 2000)
      })

      /* Evenntos do MapboxDirections
        Esse evento diparada a cada atualização que houver nas directions
      */
      directions.on('route', async (e) => {
        const summary = e.route[0]

        // Passo os valores para as funções de conversao e entao atribuo ao data
        this.distance = await convertDistance(summary.distance)
        this.duration = await returnDuration(summary.duration)
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
  height: 800px;
}
.marker {
  background-image: url(https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png);
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
