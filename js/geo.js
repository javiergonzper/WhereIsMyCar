$(document).on('click', '#record',function(e) {
    navigator.geolocation.getCurrentPosition(showMap);

});


function showMap(position) {
	console.log(position);
}



