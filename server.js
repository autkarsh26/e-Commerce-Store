const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const app = require('./index');
const port = process.env.SERVER_PORT;

const server = http.createServer(app);

try{
    server.listen(port);
}
catch(err){
    console.log("cot connected");
}

console.log(`Server started at ${port} ` + `http://localhost:${port}`);