/**
 * Esta función extrae una carta del deck y la devuelve
 * @param {String[]} deck
 * @returns {String}
 */

export const pedirCarta = ( deck ) => {

  if ( !deck || deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}
