const mongoose= require("mongoose")
//structure of document
const userSchema=mongoose.Schema({
    email:{type: String, required: true, lowercase:true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})
//creates collection
module.exports=mongoose.model("Users",userSchema)