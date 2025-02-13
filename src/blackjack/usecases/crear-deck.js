import { shuffle } from "underscore"

/**
 * Esta función crea un nuevo deck
 * @param {string[]} tiposDeCarta ejemplo ['C','D','H','S']
 * @param {string[]} tiposEspeciales ejemplo ['A','J','Q','K']
 * @returns {string[]} retorna un nuevo deck de cartas en orden aleatorio
 */



// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if ( !tiposDeCarta || tiposDeCarta.length === 0 ) {
    throw new Error('Tipos de carta es obligatorio como un arreglo de string');
  } 
  if ( !tiposEspeciales || tiposEspeciales.length === 0 ) {
    throw new Error('Tipos especiales es obligatorio como un arreglo de string');
  } 


  let deck         = [];

  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposDeCarta ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposDeCarta ) {
      for( let esp of tiposEspeciales ) {
          deck.push( esp + tipo);
      }
  }
  // console.log( deck );
  deck = shuffle( deck );
  return deck;

};
