// ya database ko validation,schema banaune ho 
//database ma table create garna lai database tw xunu paro tesaile mongoose chaiyo
//Scehma vaneko blueprint ya plan jasto ho jasle data haru kasari organize ra structure garera rakhne database ma vanera define garxa
//BluePrint is a detailed plan that guide the creation or construction of something

//mongoose: This is the Mongoose library, which provides a schema-based solution for modeling application data and interacting with MongoDB.

//importing the Mongoose library into your Node.js application. Mongoose is an Object Data Modeling (ODM) library for MongoDB and provides a way to interact with MongoDB using JavaScript objects.
const mongoose = require("mongoose");

//creating a variable named Schema and assigning it the value of the Schema property of the mongoose object. This is commonly used in Mongoose, a MongoDB object modeling tool for Node.js, to define the structure of documents that can be stored in a MongoDB database
//mongoose.Schema: mongoose has a property called Schema that allows you to define the structure of your data using a schema. A schema in Mongoose defines the shape of the documents within a collection in the MongoDB database.

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
},{
    strict:'throw'
}
);

//throw le extra field suppose username pani halera pathayo api ma vane faldinxa 

//mongoose.model is a method provided by Mongoose to create a model.
//The resulting model is assigned to the variable User. This variable can then be used to interact with the MongoDB collection associated with the model.

//creating a Mongoose model based on the provided schema. 
const User = mongoose.model("User", userSchema);

module.exports = User;
