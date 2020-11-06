const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({ 
    name: {
        type : String,
        required: true,
    },
    lastname: {
        type : String
    },
    email: {
        type : String,
        required: true,
        unique: true,
        validate: (email) => emailValid(email)
    },
    phone: {
        type : String,
        required: false
    },
    projects: [{
        ref: 'project',
        type : mongoose.Schema.Types.ObjectId
    }],
    tag: 
        {
            type: String,
            enum : ['VIP', 'Paga tarde' , 'Es un pesao']
        }
})


function emailValid(email){
    return /^\S+@\S+\.\S+$/.test(email) 
}

const customerModel = mongoose.model('customer', customerSchema)

module.exports =  customerModel