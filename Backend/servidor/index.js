var http = require("http")
var express = require("express")
var routing = require("./requestRouting.js")

var puerto = 81
var app = express()

var server = http.createServer(app)

app.use("/", routing)

server.listen(puerto, function() {
	console.log("Servidor corriendo en el puerto: " + puerto)
})