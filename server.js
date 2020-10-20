var express = require('express');

var app = express();

// esto es para heroku, porque heroku nos da el puerto que vamos a usar
const PORT = process.env.PORT || 3000;

// aca pasamos los pedidos https a http para la api de weather, ya que no trabaja en https
app.use(function(request, response, next) {

    // esta linea nos dice si es http o https
    if (request.headers['x-forwarded-proto'] === 'https') {
        response.redirect('http://' + request.hostname + request.url);
    } else {
        next();
    }
})



// agrega funcionalidad a express
// especifica un nombre de carpeta "public" para exponer al server
app.use(express.static('public'))

app.listen(PORT, function() {
    console.log("express server está corriedo en el puerto" + PORT);
})