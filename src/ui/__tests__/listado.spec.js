import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from '../listado.js';
import fixtureListadoPagina1 from "../../../cypress/fixtures/listado-pagina-1.json";

describe("actualizarTextoIndicePokemones", () => {
  it("Debería actualizar el texto del índice", () => {
    document.body.innerHTML = '<div id="indice"></div>';

    actualizarTextoIndicePokemones('Se viene Booooca');
    const $indice = document.querySelector('#indice');

    expect($indice.textContent).toBe('Se viene Booooca');
  });
});

describe("mostrarListadoPokemones", () => {
  it("Muestra el listado de los pokémon", () => {
    document.body.innerHTML = '<div id="indice"></div>';

    const listadoNombresPokemones = [];

    fixtureListadoPagina1.results.forEach(pokemon => {
      const nombrePokemon = pokemon["name"];
      listadoNombresPokemones.push(nombrePokemon);
    });

    mostrarListadoPokemones(listadoNombresPokemones);

    const $indice = document.querySelector('#indice');

    listadoNombresPokemones.forEach(nombre => {
      expect($indice.textContent).toContain(nombre);
    });
  });
});
