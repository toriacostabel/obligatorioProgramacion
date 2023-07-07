let ventas = [];
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

function actualizarTablaVentas(peliculas) {
  peliculas.forEach((pelicula) => {
    const index = ventas.findIndex((venta) => venta.pelicula === pelicula.name);
    if (index !== -1) {
      // La película ya existe en la tabla, actualizar los valores
      ventas[index].cantidadComprada += 1;
      ventas[index].ingresosPorPelicula += pelicula.cost;
      ventas[index].ingresosTotales = ventas[index].cantidadComprada * ventas[index].ingresosPorPelicula;
    } else {
      // La película no existe en la tabla, agregar una nueva fila
      const nuevaVenta = {
        pelicula: pelicula.name,
        cantidadComprada: 1,
        ingresosPorPelicula: pelicula.cost,
        ingresosTotales: pelicula.cost
      };
      ventas.push(nuevaVenta);
    }
  });
  actualizarTablaVentasHTML();
}

function actualizarTablaVentasHTML() {
  const container = document.querySelector(".tablaDeVentas");
  container.innerHTML = crearTablaVentas(ventas);
}
// TABLA DE ESTADISTICAS DE VENTAS
function crearTablaVentas(ventas) { 
    let tablaHTML = `
      <table>
        <thead>
          <tr>
            <th>Película</th>
            <th>Cantidad Vendida</th>
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
