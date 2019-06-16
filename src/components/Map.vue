<template>
	<div>
		<h3>{{ mapName }}:</h3>
		<div id="mapContainer">
			<GmapMap
				:center="{lat:-33.918861, lng:18.423300}"
				:zoom="12"
				map-type-id="terrain"
				style="width: 100%; height: 100%"
			>
			</GmapMap>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Map',
	data: function () {
		return {
			mapName: "Crime Map",
		}
	},
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
