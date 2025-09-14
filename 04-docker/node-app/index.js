const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello from node App!')
})

// added health check endpoint
app.get('/health', (req, res) => {
  res.send('I am healthy!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
