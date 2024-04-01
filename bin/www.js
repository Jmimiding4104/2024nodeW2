const http = require('http');
require('dotenv').config();
const app = require('../server');

const server = http.createServer(app);
server.listen(process.env.PORT || 3005);