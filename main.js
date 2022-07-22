const peoples = require("./pessoas.json");
const readline = require("readline");
const { exit } = require("process");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Insira os atributos a serem pesquisados (separados por espaços em branco)\n", (answer) => {
    const filter = answer.split(" ");

    rl.question("Insira os valores a serem procurados nos atributos (separados por espaços em branco)\n", (answer) => {
        const filterValues = answer.split(" ");

        let resp = filterByAtrr(peoples, filter, filterValues);

        console.log(resp);

        rl.close()
    }) 
})


rl.on("close", () => {
    
    exit(1)
})

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

        const filteredArrayWithoutDuplicates = filteredArray.filter((element, idx) => {
            return filteredArray.indexOf(element) == idx;
        })

        return filteredArrayWithoutDuplicates
    }
}
   


// let resp = filterByAtrr(peoples, ["estado", "sexo"], ["RO"])

// console.log(resp);