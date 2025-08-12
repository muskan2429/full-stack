const express = require('express')
const app = express()
const port = 3000

//parse the request body
app.use(express.json());

//API SECTION
app.post('/insert-user', (request, response) => {
    console.log(`request recieved is= ${JSON.stringify(request.body)}`)
    response.send('user inserted successfully')
})

app.post('/insert-user-1', (request, response) => {
    console.log(`request recieved is= ${JSON.stringify(request.body)}`)
    response.send(`${JSON.stringify(request.body)}`)
})

app.post('/insert-user-2', (request, response) => {
    console.log(`request recieved is= ${JSON.stringify(request.body)}`)
    console.log(typeof request.body)
    response.json(request.body)
})
app.post('/insert-person', (request, response) => {
    console.log(`request recieved is= ${JSON.stringify(request.body)}`)
    response.send(`person name is ${request.body.personName}`)
})
app.post('/insert-person-1', (request, response) => {
    console.log(`request recieved is= ${JSON.stringify(request.body)}`)
    response.json(request.body.address)
})

app.listen(port, () => {
    console.log("my backend sever is started at port " + port)
})