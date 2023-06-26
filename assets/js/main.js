function guardarDatos() {
    var datos = document.getElementById("inputData").value;
    localStorage.setItem("datosGuardados", datos);
    alert("Datos guardados en el almacenamiento local.");
}

function recuperarDatos() {
    var datos = localStorage.getItem("datosGuardados");
    if (datos) {
        alert("Datos recuperados: " + datos);
    } else {
        alert("No se encontraron datos en el almacenamiento local.");
    }
}

function navbarResponsive() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

