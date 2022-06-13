const db = require("./em_fnd_city_2.json")
const fs = require('fs')
const trains = require("./train.json")

let res = []
let rest = []
console.log(db.length)
console.log(trains.length)
let dbMap = new Map()
let dbMapRest = new Map()
for (let i = 0; i < db.length; i++) {
    if (dbMap.has(db[i].city_name)) {
        dbMapRest.set(db[i].city_name, db[i].city_id)
        continue
    }
    dbMap.set(db[i].city_name, db[i].city_id)
}
console.log(dbMapRest)
console.log(dbMap.size)

for (let i = 0; i < trains.length; i++) {
    let v = trains[i]
    if (dbMap.has(v.CityName)) {
        let data = {}
        data[v.StationName] = dbMap.get(v.CityName)
        res.push(data)
    } else {
        let data = {}
        data[v.CityName] = v.StationName
        rest.push(data)
    }
}

console.log(res.length)
console.log(rest)

let strings = ''
for (let re of res) {
    for (let reKey in re) {
        strings = strings + reKey + '=' + re[reKey] + '\n'
    }

}

fs.writeFile('./res1.properties', strings, (err, res) => {

})