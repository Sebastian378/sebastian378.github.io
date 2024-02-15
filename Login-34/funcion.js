function VerificarDatos() {

  var DeporteIngresado = document.querySelector("#DeporteFav").value.toLowerCase();
  var ComidaIngresada = document.querySelector("#ComidaFav").value.toLowerCase();

  let DeporteCorrecto = "futbol";
  let ComidaCorrecta = "hamburguesa";

  if (DeporteIngresado === "" || ComidaIngresada === "") {
    alert("Debes ingresar un deporte y una comida.");
    return;
  }
  if (DeporteIngresado === DeporteCorrecto && ComidaIngresada === ComidaCorrecta) { 
     alert("Muy bien mi amor. Te voy amar toda la vida mi reina")
  
  } else {   
    alert("Datos incorrectos");
  }
}



