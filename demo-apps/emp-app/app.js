const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const API_KEY = process.env.API_KEY  || '123456'

const emp_data = [
    {id: 1, name: 'John Doe', position: 'Software Engineer'},
    {id: 2, name: 'Jane Smith', position: 'Project Manager'},
    {id: 3, name: 'Sam Johnson', position: 'Designer'}
]


// get all employees
app.get('/', (req, res) => {
    if(req.headers['x-api-key'] === API_KEY ){
        res.json(emp_data)
    }else{
        res.status(401).send('Unauthorized: Invalid API Key')
    }
})

// health check endpoint
app.get('/health', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
