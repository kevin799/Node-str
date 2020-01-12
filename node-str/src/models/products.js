'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shema = new Schema({
    title:{
        type : String,
        required : true,
        trim : true
    },
    slug: {
        type : String,
        required : [true,'O Slug é obrigatório!'],
        trim : true,
        index : true,
        unique : true
    },
    description:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    active: {
        type : Boolean,
        required : true,
        default : true
    },
    tags: [
        {
            type : String,
            required : true
        }
    ]

});

module.exports =mongoose.model('Product',shema); 