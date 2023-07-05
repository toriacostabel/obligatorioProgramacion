let ventas = [
  {
      pelicula: 'Barbie',
      cantidadComprada: 3,
      ingresosPorPelicula: 800,
      ingresosTotales: 2400
  }, {
      pelicula: 'Barbie',
      cantidadComprada: 3,
      ingresosPorPelicula: 800,
      ingresosTotales: 2400
  }, {
      pelicula: 'Barbie',
      cantidadComprada: 3,
      ingresosPorPelicula: 800,
      ingresosTotales: 2400
  }
]
let tablaVentas = crearTablaVentas(ventas);

let container = document.querySelector(".tablaDeVentas");
container.innerHTML = tablaVentas;
window.addEventListener('DOMContentLoaded', function () {
    let savedVentas = getVentasFromLocalStorage();
    savedVentas.length > 0 ? loadVentas(savedVentas) : loadVentas(ventas);
});

function getVentasFromLocalStorage() {
    let ventasString = localStorage.getItem('venta');
    return ventasString ? JSON.parse(ventasString) : [];
}

// TABLA DE ESTADISTICAS DE VENTAS
function crearTablaVentas(ventas) { 
    let tablaHTML = `
      <table>
        <thead>
          <tr>
            <th>Película</th>
            <th>Cantidad de Peliculas Vendidas</th>
            <th>Ingresos por Película</th>
            <th>Ingresos Totales</th>
          </tr>
        </thead>
        <tbody>
        `;
    for (let venta of ventas) {
        let {pelicula, cantidadComprada, ingresosPorPelicula, ingresosTotales} = venta;
        let filaHTML = `
            <tr>
              <td>${pelicula}</td>
              <td>${cantidadComprada}</td>
              <td>${ingresosPorPelicula}</td>
              <td>${ingresosTotales}</td>
            </tr>
          `;
        tablaHTML += filaHTML;
    }
    tablaHTML += `
        </tbody>
      </table>
      `;
    return tablaHTML;
}

console.log(tablaVentas);
