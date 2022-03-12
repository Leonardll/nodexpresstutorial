const http = require('http')

const server = http.createServer( (req,res) => { 
   req.url === '/' ? res.end('welcome to leo home page') :
   req.url === '/about' ? res.end('here is my story') :
   res.end(`<h1> oops!</h1>
   <p> We can't seem to find the page you are looking </p>
   <a href="/">back home</a>`)
 })

 server.listen(5000)