<template>
<div id="app">
	<Map v-if="markersReceived === true" :markers="markers" />
</div>
</template>

<script>

import Map from './components/Map.vue'

export default {
	name: 'app',
	data: function() {
		return {
			markers: [],
			markersReceived: false
		}
	},
	components: {
		Map
	},
	mounted() {
		this.getPositions();
	},
	methods: {
		getPositions: function() {
			setTimeout(() => {
				let tempMarkers = [
					{position: {
						lat: -33.918861,
						lng: 18.423300
					}
					}	
				]
				this.markers = tempMarkers;
				this.markersReceived = true;
			}, 1000);
		},
		geocodeAddress: function () {
		// 	const address = "Zonnebloem";
		// 	debugger;
		// 	this.$refs.gmap.$mapCreated.then(() => {
        //     	var geocoder = new google.maps.Geocoder();

		// 		var address = "Dublin";

		// 		geocoder.geocode( { 'address': address}, function(results, status) {

        //         if (status == google.maps.GeocoderStatus.OK) {
        //           var latitude = results[0].geometry.location.lat();
        //           var longitude = results[0].geometry.location.lng();

        //           console.log(latitude)
        //           // initialize(latitude,longitude);

        //                   } 

        //           });
        //   })
		}
		}
	}
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
