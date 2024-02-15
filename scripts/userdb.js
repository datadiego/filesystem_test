const fs = require("fs")

const db = "./db/users.json"

function readJSON(db){
    const miobjeto_json = fs.readFileSync(db, "utf-8")
    const miobjeto = JSON.parse(miobjeto_json)
    return miobjeto
}

function resetUsers(){
    const user0 = {
        "username": "admin",
        "password": "1234"
    }
    const user1 = {
        "username": "usuario0",
        "password": "user0123"
    }
    const miobjeto = {
        "users": [user0, user1]
    }
    fs.writeFile(db, JSON.stringify(miobjeto, null, 2), (err) => {
        if (error) {
          console.log(error)
          return
            }
        console.log("Archivo creado")
        })

}

function addUser(){
    const miobjeto = readJSON(db);
    const { users } = miobjeto
    

}

addUser()

module.exports = {
    db,
    readJSON
}