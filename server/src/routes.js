module.exports = (app) => {
  // Send information from server to client
  app.post('/register', (req,res) => {
    res.send({
      message: `Hello ${req.body.email} ! You have been registered!`
    })
  })
}
