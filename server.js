var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// agrega funcionalidad a express
// especifica un nombre de carpeta "public" para exponer al server
app.use(express.static('public'))

app.listen(PORT, function() {
    console.log("express server está corriedo en el puerto" + port);
})