let http = require ('http')
let server = http.createServer((req, res) => {      //method is used to create an HTTP server. The method takes a callback function as an argument, which will be executed every time a request is made to the server.
    res.writeHeader(206)
    res.write('<h1>Bark!</h1><img src="https://httpstatusdogs.com/img/206.jpg" alt="206">')   //sends data to the client
    res.end()   //closes the connection 
})

server.listen(3000, function() {       //to know we are activating the server variable, you add server.listen
    console.log('Good Morning')
})

//the client is (me), going to the browser and typing in localhost3000
//the server is responding "Hello World" - go in developer's tool - network