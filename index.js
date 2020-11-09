const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_ADMIN_PASSWORD}@cluster0.ek3po.mongodb.net/CRMLaPuerta?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
 
app.use(cors({ origin : [  'osama.com' , 'http://localhost:4200' ,  ]}));

app.use(  express.json()  );

app.get('/', (request, response) => {
    return response.send('Hola Mundo');
})

const customersRouter = require('./api/customers/customers.router');
app.use('/customers'   , customersRouter)

const projectsRouter = require('./api/projects/projects.router');
app.use('/projects'   , projectsRouter)


app.listen(5000, (err) => {
    if (err) return console.log('Hay una error ! ', err);
    console.log('Servidor corriendo en el 5000');
})
