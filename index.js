const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url =
  "mongodb://192.168.2.11:27017,192.168.2.12:27017,192.168.2.13:27017/?replicaSet=rs0"

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  console.log("Hello World!!!   Database Found")
  var myDatabase = db.db("theethawatDB")
  myDatabase
    .collection("family")
    .find({})
    .toArray(function(err, result) {
      if (err) throw err
      console.log(result)
    })
  myDatabase
    .collection("family")
    .insertOne(
      { name: "Undefine Women", surname: "Savastham", status: "Wife" },
      function(err, result) {
        if (err) throw err
        console.log("document add!")
      }
    )
  db.close()
})
