import { manejarCambioPagina } from '../paginador.js';
import mostrarPaginador from '../paginador.js';

describe("mostrarPaginador", () => { 
  beforeEach(() => {
    document.body.innerHTML = '<div id="paginador"></div>';
  });

  it("Muestra el paginador", () => {
    const $paginador = document.querySelector("#paginador");
    expect($paginador.children.length).toBe(0);

    const totalPokemones = 1302;
    const paginaActual = 1;
    const urlSiguiente = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
    const urlAnterior = null;

    mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, () => {});
    expect($paginador.children.length).toBeGreaterThan(0);
  });

  it("Ejecuta la función asignada luego de dar click al paginador", async () => {
    const funcionAEspiar = jest.fn();
    
    const totalPokemones = 1302;
    const paginaActual = 1;
    const urlSiguiente = null;
    const urlAnterior = true;

    mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, funcionAEspiar);
    const eventoClick = new Event('click');
    document.querySelector('#paginador').dispatchEvent(eventoClick);
    expect(funcionAEspiar).toHaveBeenCalled();
  });
});
