const http = require('http');
const fs = require ('fs');
const _ =require('lodash');

const server = http.createServer((req, res) => {
// console.log('request made');
// console.log(req.url, req.method);

// lodash
const num = _.random(0,20);
console.log(num);

const greet = _.once(() =>{
console.log('hello');
});
greet();
greet();


// set header content type
res.setHeader('Content-Type','text/html')

let path = './views/';
switch (req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html'
        res.statusCode = 200;
        break;
    case '/about-me':
        res.statusCode = 301;
        res.setHeader('location', '/about')
        res.end();
        break;
    default:
        path += '404.html'
        res.statusCode = 404;
        break;
}

// send an html file
// fs.readFile('./views/index.html',(err, data)=>{
fs.readFile(path,(err, data)=>{    
    if (err){
       console.log(err); 
       res.end();
    } else {
       // res.write(data);
       
        res.end(data); // does the same thing as res.write(data)
    }
})

}); // creates a server

server.listen(3000,'localhost', () => {
    console.log('listening for requests on port 3000')
});


// res.setHeader('content-type','text/plaintext')
/* res.write('<h1>hello, ninjas</h1>');
res.write('<p>hello, ninjas</p>');
res.end(); */