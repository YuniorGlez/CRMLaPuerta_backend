const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(cors({ origin : [  'osama.com' , 'localhost:4200'  ]}));

app.use(  express.json()  );

app.get('/', (request, response) => {
    return response.send('Hola Mundo');
})

const customersRouter = require('./api/customers/customers.router');
app.use('/customers'   , customersRouter)


app.listen(5000, (err) => {
    if (err) return console.log('Hay una error ! ', err);
    console.log('Servidor corriendo en el 5000');
})
