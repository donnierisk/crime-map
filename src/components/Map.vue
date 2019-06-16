<template>
	<div>
		<h3>{{ mapName }}:</h3>
		<button @click="geocodeAddress">
			Add address
		</button>
		<div v-if="mapLoaded === false" id="mapContainer">
			<GmapMap
				ref="mapRef"
				:center="{lat:-33.918861, lng:18.423300}"
				:zoom="12"
				map-type-id="terrain"
				style="width: 100%; height: 100%"
			>
				<GmapMarker
					:key="index"
					v-for="(m, index) in markers"
					:position="m.position"
					:clickable="true"
					:draggable="true"
					@click="center=m.position"
				/>
			</GmapMap>
		</div>
	</div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  name: 'Map',
	
	data: function () {
		return {
			mapName: "Crime Map",
			mapLoaded: false
		}
	},
	computed: {
		google: gmapApi,
		markers: () => {
			
			let positions = [
				{
					position:{lat:-33.918861, lng:18.423300}
				},
				{
					position:{lat:-33.908861, lng:18.523300}
				}
			]
			return positions;
		}
	},
	mounted() {
		// this.$refs.mapRef.$mapPromise.then((map) => {
		// 	setTimeout(function() {
    //   	map.panTo({lat:-33.918861, lng:18.443310})
		// 	}, 2500)
    // })
	},
	methods: {
		geocodeAddress: function () {
			const address = "Zonnebloem";
				var geocoder = new this.google.maps.Geocoder();
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            // resultsMap.setCenter(results[0].geometry.location);
            // var marker = new google.maps.Marker({
            //   map: resultsMap,
            //   position: results[0].geometry.location
            // });
						const lat = results[0].geometry.location.lat();
						const lng = results[0].geometry.location.lng();
						const position = {
							lat,
							lng
						};
						console.log(position);

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mapContainer {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
