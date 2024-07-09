import mostrarPokemon from '../pokemon.js';
import pokemonFixtureHTML from '../../../cypress/fixtures/pokemon.fixture.js';

describe("mostrarPokemon", () => {
  it("Muestra el pokémon específico", () => {
    document.body.innerHTML = pokemonFixtureHTML;

    const charizardDeEjemplo = {
      id: 6,
      nombre: 'charizard',
      foto: 'https://ejemplo-imagen.png',
      tipos: ['primerTipo', 'segundoTipo'],
      habilidades: ['habilidad1', 'habilidad2'],
      movimientos: [
        {
          'movimiento': 'movimiento1',
          'versiones': ['version1', 'version2']
        },
        {
          'movimiento': 'movimiento2',
          'versiones': ['version3', 'version4']
        },
      ],
    };
    mostrarPokemon(charizardDeEjemplo);

    const nombrePokemon = document.querySelector("#pokemon-nombre").textContent;
    expect(nombrePokemon).toEqual(charizardDeEjemplo.nombre);

    const idPokemon = document.querySelector("#pokemon-id").textContent;
    expect(idPokemon).toEqual(`${charizardDeEjemplo.id}`);
  });
});
