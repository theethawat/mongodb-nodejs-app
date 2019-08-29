const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url = "mongodb://192.168.2.11:27017"

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  console.log("Hello World!!!   Database Found")
  var dbo = db.db("theethawatDB")
  dbo
    .collection("family")
    .find({})
    .toArray(function(err, result) {
      if (err) throw err
      console.log(result)
    })
  db.close()
})
