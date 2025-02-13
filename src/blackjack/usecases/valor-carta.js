/**
 * Esta función recibe un string de carta y devuelve su valor
 * @param {String} carta 
 * @returns {Number}
 */

export const valorCarta = ( carta ) => {

  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1;
}