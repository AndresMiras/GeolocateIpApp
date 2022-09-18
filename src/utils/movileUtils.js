export default function isMovile() {
  let user = navigator.userAgent;
  if (
    user.match(/Android/i) ||
    user.match(/webOS/i) ||
    user.match(/iPhone/i) ||
    user.match(/iPad/i) ||
    user.match(/iPod/i) ||
    user.match(/BlackBerry/i) ||
    user.match(/Windows Phone/i)
  ) {
  //   console.log("Usuario móvil, detectado");
      return true;
  } else {
  //   console.log("Usuario con estación detectado, PC");
      return false
  }
};


export const movileCoords = (location, fnMessage = alert) => {

  let geolocation0 = {...location}

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
          function (position) {
            const { latitude, longitude } = position.coords;
            // console.log({ latitude: latitude, longitude: longitude });
            geolocation0.latitude = latitude;
            geolocation0.longitude = longitude;
            

          }, (objPositionError) => {
            switch (objPositionError.code) {
              case objPositionError.PERMISSION_DENIED:
                fnMessage(
                  `Access to the user's position has not been allowed.`
                  // "No se ha permitido el acceso a la posición del usuario."
                );
                break;
              case objPositionError.POSITION_UNAVAILABLE:
                fnMessage(
                  "Your position information could not be accessed."
                  // "No se ha podido acceder a la información de su posición."
                );
                break;
              case objPositionError.TIMEOUT:
                fnMessage(
                  "The service has taken too long to respond."
                  // "El servicio ha tardado demasiado tiempo en responder."
                );
                break;
              default:
                fnMessage(
                  "Unknown error."
                  // "Error desconocido."
                );
            }
          }, {
            enableHighAccuracy: true, // Alta precisión
            maximumAge: 0, // No queremos caché
            timeout: 5000 // Esperar solo 5 segundos
          }
        )
  } else {
      alert("Browser not supported for the use of geolocation");
  }

  return geolocation0
};

// navigator.geolocation.watchPosition((pos) => {
//   console.log(pos);
// });
