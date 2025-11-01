const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors()) // allow cross-origin requests

const port = process.env.PORT || 3000

const EMPLOYEE_DATA = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Designer' },
  { id: 3, name: 'Charlie', position: 'Manager' }
]

// Endpoint to get employee data, protected by API key
app.get('/', (req, res) => {

    const API_KEY = req.headers['x-api-key'] || ''
    if(API_KEY === "secret123"){
        res.json(EMPLOYEE_DATA)
    } else {
        res.status(401).send('Unauthorized: Invalid API Key')
    }
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Hello World!')
})


// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
