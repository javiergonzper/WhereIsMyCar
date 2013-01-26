
$(document).on('click', '#record',function(e) {
    navigator.geolocation.getCurrentPosition(savePosition);
});

$(document).on('click', '#showMap',function(e) {
	showMap();
});

$(document).on('click', '#addAlarm',function(e) {
	addAlarm();
});


function savePosition(position) {
	console.log(position);
	$('#information').attr("display","visible");
	alert("Position Recorded");
	localStorage.setItem('lat',position.coords.latitude);
	localStorage.setItem('lng',position.coords.longitude);
	localStorage.setItem('timestamp',position.timestamp);
	$('#information').show();
}


function showMap() {
	console.log('lala');
	$("#map").html('<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/?q='+ localStorage.getItem('lat') + ',' + localStorage.getItem('lng') +  '&amp;ie=UTF8&amp;t=m&amp;z=14&amp;ll='+ localStorage.getItem('lat') + ',' + localStorage.getItem('lng') +  '&amp;output=embed"></iframe>');

}


function addAlarm() {
	var request = navigator.mozAlarms.add(localStorage.getItem('timestamp')+10000,"ignoreTimeZone");
}



