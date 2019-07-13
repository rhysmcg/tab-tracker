console.log('Started');

// Import the required dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

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

require ('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)

  }
)

// Set the app to port 8081
//app.listen(process.env.PORT || 8081)
