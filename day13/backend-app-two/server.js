// import express module
const express = require('express')
// intialize app with express function
const app = express()
// define port
const port = 3000

/*
API Section

*/
/* 
----- API 1 -----
http method = get
url = '/api-1'
request = {}
response = "this is my first api"
*/
app.get('/api-1', (requst, response) => {
    response.send('this is my first api')
})
app.get('/api-2', (requst, response) => {
    response.send('my name is muskan')
})
app.get('/test-api-3', (requst, response) => {
    response.send('my test api 3 is working fine')
})
app.get('/homepage-admin', (requst, response) => {
    response.send('this is website homepage')
})
// start server
app.listen(port, () => {
    console.log("my server is started at port " + port)
})