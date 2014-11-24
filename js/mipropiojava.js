

function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	$("#resultado").html("Phonegap está en funcionamiento.");

	//navigator.accelerometer.getCurrentAcceleration(onInfo, onError);

	var watch = navigator.accelerometer.watchAcceleration (onInfo, onError, {frecuency: 2000});
}

function onInfo(aceleracion){
$("#resultado").html( 'Acceleration X: ' + aceleracion.x + '<br>' +
          				'Acceleration Y: ' + aceleracion.y + '<br>' +
          				'Acceleration Z: ' + aceleracion.z + '<br>' +
          				'Timestamp: '      + aceleracion.timestamp);
}

function onError(){
	alert("No hay acelerómeto.");
}