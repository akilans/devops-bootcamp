const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const API_KEY = process.env.API_KEY || 'default_key'
const API_URL = process.env.API_URL || 'http://localhost:3000/'

// basic endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// endpoint to display environment variables
app.get('/env', (req, res) => {
  res.json(process.env)
})

// external API call example
app.get('/employee', (req, res) => {
    fetch(API_URL, {
        headers: {
            'x-api-key': API_KEY
        }
    }).then(response => {
        console.log(response.status);
        if(response.status === 401){
            res.status(401).send('Unauthorized: Invalid API Key')
        }else{
            return response.json()
        }
    }).then(data => {
        console.log(data);
        res.json(data)
    }).catch(error => {
        res.status(500).send('Error connecting to external API')
    })
})


//health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

// start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
