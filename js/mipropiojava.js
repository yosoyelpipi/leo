

function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	$("#resultado").html("Phonegap está en funcionamiento.");

	navigator.accelerometer.getCurrentAcceleration(onInfo, onError);
}

function onInfo(aceleracion){
$("#resultado").append( 'Acceleration X: ' + aceleracion.x + '\n' +
          				'Acceleration Y: ' + aceleracion.y + '\n' +
          				'Acceleration Z: ' + aceleracion.z + '\n' +
          				'Timestamp: '      + aceleracion.timestamp + '\n');
}

function onError(){
	alert("No hay acelerómeto.");
}