var express = require('express');

var app = express();

// agrega funcionalidad a express
// especifica un nombre de carpeta "public" para exponer al server
app.use(express.static('public'))

app.listen(3000, function() {
    console.log("express server está corriedo en el puerto 3000");
})