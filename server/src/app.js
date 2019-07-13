console.log('Started');

// Import the required dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


// Set up the dependencies
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// localhost:8081/status returns the object
app.get('/status', (req,res) => {
  res.send({
    message: "hello world!"
  })

})

// Set the app to port 8081
app.listen(process.env.PORT || 8081)
