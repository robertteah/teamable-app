const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', function(req, res) {
          const response = {
                    name: "Rob Teah",
                    email: "rob.smith@email.com",
                    interests: "coding"
          }
          res.send(response)
})

app.listen(3000, function (){
          console.log("app listening on port 3000")
})