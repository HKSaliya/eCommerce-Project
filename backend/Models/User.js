const mangoose = require('mongoose');
const Schema = mangoose.Schema;

const register = new Schema({
    name:({
        type:String
    }),
    email:({
        type:String,
        unique: true
    }),
    password:({
        type:String
    })
})

const MyModel = mangoose.model('eCommerce', register);

module.exports = MyModel;