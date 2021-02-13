/**
 * Script principal de la aplicación
 * @author maabro 
*/
/**
 * Importación de los paquetes principales
*/
const express = require('express');
const axios = require('axios');

const app = express();
/**
 * Axios defaults
*/
axios.defaults.baseURL = 'http://api.pathofexile.com';

function getCharacters(y) {
    axios.get('/ladders/Standard?offset=' + y + '&limit=10').then((response) => {
        //console.log(response.data.character);
        var ranks = response.data.entries;
        console.log(ranks);
    })
    .catch((error) => {
        console.log(error);
    });
}

app.get('/', (req, res) => {
    getCharacters(z);
    res.send("NiCE");
});

/**
 * Arranque del servidor
*/
app.listen(8000, () => {
    console.log("Servidor encendido en el puerto: " + 8000);
});