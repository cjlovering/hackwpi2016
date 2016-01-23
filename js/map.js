
var draw_circle=null;
var flag = 1;
function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.87041555, lng: -23.81835937},
    scrollwheel: false,
    zoom: 2
  });

	draw_circle = new google.maps.Circle({
		center: new google.maps.LatLng(33.87041555, -23.81835937),
		radius: 700000,
		strokeColor: "red",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "red",
		fillOpacity: 0.35,
		map: map
	});
	loop();
}

function loop() {
	//console.log("hi");
	setTimeout(function() {
		if(draw_circle.radius > 10000 && flag === 1) {
			draw_circle.radius-=10000;
			console.log("subtract");
		}
		else if(draw_circle.radius < 700000 && flag === 0) {
			draw_circle.radius+=10000;
			console.log("add");
		}
		else {
			if(flag === 1){flag = 0;}else{flag = 1;}
			console.log(flag, draw_circle.radius);
		}

		loop();
	}, 100)
}



