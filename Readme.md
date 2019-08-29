# Node.js Application Using MongoDB

Test Replication of MongoDB Replica Using Node.js Basic App

## Method to Write URL

    const url = "mongodb://192.168.2.11:27017,192.168.2.12:27017,192.168.2.13:27017/?replicaSet=rs0"

You can set database name after `/` of the last replica host and set replica set using `replicaset=replicasetName`

## Method Start

    - install MongoClient
            npm install MongoClient --s
    - define in the top of program
            const MongoClient = require("mongodb").MongoClient

## Method to Connect

The Easiest way is to use `MongoClient.connect()` and use function inside it, let program architecture like Method -> Method -> Method Inside like this

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err
    console.log("Hello World!!! Database Found")
    db.close()
    })

## Method to Connect the Collection

create variable `dbo` reference to my database name like `admin`,`config`,`local` that you can find with command `show dbs` in mongo shell on the initiate of MongoDB in my work i use `theethawatDB`

    var dbo = db.db("theethawatDB")

remember that `db` represent our mongodb database in `.connect` Method the using command is `db.db(databaseName)`

After that connect to the collection (Don't forget to Exception Handler, catch Error) like this

    dbo
    .collection("family")
    .find({})
    .toArray(function(err, result) {
      if (err) throw err
      console.log(result)
    })

## Any Command

For the Any Commands could find in https://mongodb.github.io seeing api references here!

## Working Creator

- Theethawat Savastham
- Student Code: 5910110150
- Subject: 240-460 Internet Programming
- College: Department of Computer Engineering, Prince of Songkla University, Hatyai Thailand
