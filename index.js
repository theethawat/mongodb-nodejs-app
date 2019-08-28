const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url =
  "mongodb://192.168.2.11:27017,192.168.2.12:27017,192,168.2.13:27017/?replicaSet=rs"
const dbName = "theethawatDB"

const client = new MongoClient(url, { useNewUrlParser: true })

try {
  //Something Wrong
  client.connect({ useUnifiedTopology: true })
  const db = client.db(dbName)
} catch (err) {
  console.log(err.stack)
}

client.close()
