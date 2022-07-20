const peoples = require("./pessoas.json");

let res = []

for (people of peoples) {
    
    if (people.nome == "Fabiana"){
        res.push(people)
    }
}
console.log(res);