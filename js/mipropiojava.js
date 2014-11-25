

function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	$("#resultado").html("Phonegap está en funcionamiento.");

	//navigator.accelerometer.getCurrentAcceleration(onInfo, onError);
    checkConnection();
	var watch = navigator.accelerometer.watchAcceleration (onInfo, onError, {frecuency: 2000});
}

/*
*
red
*
*/


        function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            alert('Connection type: ' + states[networkState]);
        }

/*
*
acelerometro
*
*/


function onInfo(aceleracion){
$("#resultado").html( 'Acceleration X: ' + aceleracion.x + '<br>' +
          				'Acceleration Y: ' + aceleracion.y + '<br>' +
          				'Acceleration Z: ' + aceleracion.z + '<br>' +
          				'Timestamp: '      + aceleracion.timestamp);
}

function onError(){
	alert("No hay acelerómeto.");
}

/*
*
audio
*
*/

function audio(e){
	
	$("#b_playAudio").bind("tap", function(){
		e.preventDefault();
   		e.stopImmediatePropagation();
		 $("#resultadoAudio").html("Pidiendo audio");
 			playAudio("http://leocondori.com.ar/app/audio/linea.mp3");
	});
	
	$("#b_stopAudio").bind("tap", function(){
		e.preventDefault();
   		e.stopImmediatePropagation();
 			stopAudio();
	});
}
	var my_media = null;
    var mediaTimer = null;
	
	function playAudio(src) {
         if (my_media == null) {
              my_media = new Media(src, onSuccess, onError);
         } 
		 my_media.play();

         if (mediaTimer == null) {
              mediaTimer = setInterval(function() {
                 my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
								$("#resultadoAudio").html("Pos = " + position);
                            }
                        },
                        // error callback
                        function(e) {
							$("#resultadoAudio").html("Error = " + e);
                            setAudioPosition("Error: " + e);
                        }
                 );
             }, 1000);
         }
    }

	function stopAudio() {
        if (my_media) {
             my_media.stop();
        }
        clearInterval(mediaTimer);
        mediaTimer = null;
    }
	
	function onSuccess() {
           $("#resultadoAudio").html("playAudio():Audio Success");
    }

     function onError(error) {
         $("#resultadoAudio").html('code: '    + error.code  + '<br>' +
                  'message: ' + error.message + '\n');
      }