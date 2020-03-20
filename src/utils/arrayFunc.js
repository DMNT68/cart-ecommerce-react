/**
 * Contar duplicados. Nos permite sabes cuantos productos exactamente iguales tenemos en el carrito
 * @param {object} value producto
 * @param {number[]} array arreglo de productos indices
 */
export const countDuplicatesItemArray = (value, array) => {
	let count = 0;
	array.forEach(arrayValue => {
		if (arrayValue === value) {
			count++;
		}
	});
	return count;
};

/**
 * Permite saber cuantos productos unicos existen en el carrito
 * @param {array} array arreglo de duplicados
 */
export const removeArrayDuplicates = array => Array.from(new Set(array));

/**
 * Permite bajar cantidades en el carrito
 * @param {array} array arreglo de prodcutos
 * @param {number} item n'umero indice
 */
export const removeItemArray = (array, item) => {
	const index = array.indexOf(item);
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
};
