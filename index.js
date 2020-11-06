const express = require('express');
const app = express();




app.get('/', (request, response) => {
    
    return response.send('Hola Mundo');
})







app.listen(5000, (err) => {
    if (err) return console.log('Hay una error ! ', err);
    console.log('Servidor corriendo en el 5000');
})
