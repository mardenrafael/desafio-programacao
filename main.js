const peoples = require("./pessoas.json");


/**
 * @param objectToFilter Array de objetos para ser filtrado
 * @param attrsToSearch Array de atributos a serem pesquisados
 * @param attrsValues Array com valores que vão servir de filtro
 * @returns Array que contem os resultados do filtro
 */
function filterByAtrr(objectToFilter, attrsToSearch, attrsValues) {
    
    let filteredArray = []

    // Garante que os atributos estão em LowerCase (padrão do json importado)
    attrsToSearch.map((value, index) => {
        attrsToSearch[index] = value.toLowerCase()
    })


    for (let i = 0; i < objectToFilter.length; i++) {
        for (let j = 0; j < attrsToSearch.length; j++) {
            for (let k = 0; k < attrsValues.length; k++) {
                
                if (objectToFilter[i][attrsToSearch[j]] == attrsValues[k]) {
                    filteredArray.push(objectToFilter[i])
               }
            }
        }
    }


    if (filteredArray.length == 0) {
        
        return `Nada foi encontrado com o filtro: ${attrsValues}\nTente outro filtro`
    } else {

        return filteredArray
    }
}
   


let resp = filterByAtrr(peoples, ["estado", "sexo"], ["RJ"])

console.log(resp);