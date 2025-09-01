// import json server

const JSONServer = require('json-server')

// \import db.json
const router = JSONServer.router("db.json")

// creatte serer for running json file
const rBuilderServer=JSONServer.create()

// adding middlewares
const middleware=JSONServer.defaults()

// define port to run the app
const PORT=3000

// use middleware json server
rBuilderServer.use(middleware)

// define routes for client requests
rBuilderServer.use(router)

// run the server for client request
rBuilderServer.listen(PORT,()=>{
    console.log(`rBuiderServer started at port ${PORT} and waiting for client request!!!`);
    
})