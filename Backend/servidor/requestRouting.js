var express = require("express")
var path = require("path")
var router = express.Router()

var viewsPath = path.join(_dirname, "../") + "public"

router.get("/usuarios", function(req, res) {
	res.sendFile(viewsPath + "usuarios.html");
	res.end()
})

router.get("/administradores", function(req, res) {
	res.sendFile(viewsPath + "administradores.html");
	res.end()
})

router.get("/tablero", function(req, res) {
	res.sendFile(viewsPath + "tablero.html");
	res.end()
})

router.get("/*", function(req, res) {
	res.send("No se encontró el recurso solicitado")
	res.end()
})

module.exports = router