const fs = require("fs")

//fs.writeFileSync("./test.txt", "hola mundo")
const coche = {
    "ruedas": 4,
    "puertas": 5,
    "tipo_motor": "electrico",
    "marca" : "ford",
    "modelo": "fiesta"
}

const coche_json = JSON.stringify(coche, null, 2)

fs.writeFile("./coches/coche.json", coche_json, (error) => {
    if (error) {
      console.log(error)
      return
        }
    console.log("Archivo creado")
    })