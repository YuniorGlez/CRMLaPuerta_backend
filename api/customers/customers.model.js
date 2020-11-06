const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({ 
    name : 'String'
})

const customerModel = mongoose.model('customer', customerSchema)

module.exports =  customerModel