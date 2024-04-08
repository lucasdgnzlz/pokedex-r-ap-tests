import { manejarCambioPagina } from '../paginador.js';
import mostrarPaginador from '../paginador.js';

describe("mostrarPaginador", () => { 
  it("Muestra el paginador", () => {
    document.body.innerHTML = '<div id="paginador"></div>';

    const $paginador = document.querySelector("#paginador");
    expect($paginador.children.length).toBe(0);

    const totalPokemones = 1302;
    const paginaActual = 1;
    const urlSiguiente = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
    const urlAnterior = null;

    mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, () => {});
    expect($paginador.children.length).toBeGreaterThan(0);
  });
});
