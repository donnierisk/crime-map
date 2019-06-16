<template>
	<div>
		<h3>{{ mapName }}:</h3>
		<div id="mapContainer" v-if="markers.length > 0">

			<GmapMap
				ref="gmap"
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
					@click="marker(m.position)"
				/>
			</GmapMap>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Map',
	props: ['markers'],
	data: function () {
		return {
			mapName: "Crime Map",
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
		marker: function(position) {
			console.log("HEE", position);
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
