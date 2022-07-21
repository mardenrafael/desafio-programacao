const peoples = require("./pessoas.json");


/**
 * @param objectToFilter Array de objetos para ser filtrado
 * @param attrsToSearch Array de atributos a serem pesquisados
 * @param attrsValues Array com valores que vão servir de filtro
 * @returns Array que contem os resultados do filtro
 */
function filterByAtrr(objectToFilter, attrsToSearch, attrsValues) {
    
    let filteredArray = []

    for (let i = 0; i < objectToFilter.length; i++) {
        for (let j = 0; j < attrsToSearch.length; j++) {
            for (let k = 0; k < attrsValues.length; k++) {
                
                if (objectToFilter[i][attrsToSearch[j]] == attrsValues[k]) {
                    filteredArray.push(objectToFilter[i])
               }
            }
        }
    }

   return filteredArray
}


let resp = filterByAtrr(peoples, ["nome"], ["Tereza Luzia Gomes"])
console.log(resp);