const express = require('express')
const app = express()

const Server = require('./models/server.js')
const server = new Server();
server.listen();