const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({ 
    title: {
        type : String,
        required: true,
    },


    customer: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required : true
    }


})


const projectsModel = mongoose.model('project', projectsSchema)

module.exports =  projectsModel