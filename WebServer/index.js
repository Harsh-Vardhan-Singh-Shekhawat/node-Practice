const http = require('http')
const PORT = 3000;

const server = http.createServer((req,res) => { // to create server
    res.writeHead(200, {        // to return the status code inheader 
        'Content-Type':'application/js'
    })
    res.end(JSON.stringify({ // used to end the response 
        id:1,
        name:'Sir Isaac Newton'
    }))
})

server.listen(PORT, () => {         // where this server will display the data objects
    console.log(`Listening on PORT ${PORT}`)
})