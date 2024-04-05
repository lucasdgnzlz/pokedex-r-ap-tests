import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from '../listado.js';

describe("actualizarTextoIndicePokemones", () => {
  it("Debería actualizar el texto del índice", () => {
    document.body.innerHTML = '<div id="indice"></div>';

    actualizarTextoIndicePokemones('Se viene Booooca');
    const $indice = document.querySelector('#indice');

    expect($indice.textContent).toBe('Se viene Booooca');
  });
});
