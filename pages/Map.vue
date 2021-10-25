<template>
  <div ref="mapContainer" class="w-full h-full" />
</template>

<script lang="ts">
import {
  ref,
  onMounted
} from '@vue/runtime-core'


function getGeolocation (): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
}

export default {
  name: 'Map',
  setup () {
    const mapContainer = ref()
    const kakaoMap = ref(null)

    const onLoad = async () => {
      const geo = await getGeolocation()
      const { latitude, longitude } = geo.coords
      await updateCoordinate(latitude, longitude)
    }

    const updateCoordinate = (lat: number, lng: number) => {
      kakaoMap.value.setCenter(new kakao.maps.LatLng(lat, lng))
    }

    function initializeKakaoMapScript () {
      const script = document.createElement('script')
      /* global kakao */
      script.onload = () => kakao.maps.load(initMap)
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?appkey=1fa3d84c220e7a4cbc19ac98ad079f9a&autoload=false'
      document.head.appendChild(script)
    }

    function initMap () {
      const container = mapContainer.value
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 4
      }

      kakaoMap.value = new kakao.maps.Map(container, options)
      kakao.maps.event.addListener(kakaoMap.value, 'click', function (mouseEvent) {
        const { La: lng, Ma: lat } = mouseEvent.latLng
        updateCoordinate(lat, lng)
      })
      onLoad()
    }

    onMounted(() => {
      window.kakao && window.kakao.maps
          ? initMap()
          : initializeKakaoMapScript()
    })

    return {
      mapContainer,
      kakaoMap
    }
  }
}
</script>

<style scoped>

</style>