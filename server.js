const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb')
const { isInvalidEmail, isEmptyPayload } = require('./validator')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'company_db'
const collectionName = 'employees'

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', async function(req, res) {
          // connect to mongodb database
          await client.connect()
          console.log("Connected correctly to server")

          // initialize or get the database & collection
          const db = client.db(dbName)
          const collection = db.collection(collectionName)

          // get the data from database
          const result = await collection.findOne({id: 1})
          console.log(result)
          client.close()

          response = {}

          if (result !== null) {
                    response = {
                              name: result.name,
                              email: result.email,
                              interest: result.interest
                    } 
          }

          res.send(response)
})

app.post('/update-profile', async function(req, res) {
          const payload = req.body
          console.log(payload)

          if (isEmptyPayload(payload) || isInvalidEmail(payload)) {
                    res.send({error: "invalid payload"})
          } else {
                    // connect to mongodb database
                    await client.connect()
                    console.log("Connected correctly to server")

                     // initialize or get the database & collection
                    const db = client.db(dbName)
                    const collection = db.collection(collectionName)

                    // save payload to database
                    payload ['id'] = 1;
                    const updateValues = {$set: payload}
                    await collection.updateOne({id: 1}, updateValues, {upsert: true})
                    client.close()

                    res.send({message: "success"})
          }
})

const server = app.listen(3000, function () {
          console.log("app listening on port 3000")
})

module.exports = {
          app,
          server
}