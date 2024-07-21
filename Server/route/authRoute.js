//creating an instance of the Express Router. In Express.js, the Router is a middleware that allows you to group route handlers for a specific part of your application. It helps in modularizing the routes and organizing them in a more structured manner.

//require("express") imports the Express library.
//.Router() creates a new instance of the Express Router.

//const router = ...The newly created Router instance is assigned to the variable router. This variable is then used to define routes and middleware specific to a certain part of your application.
const router = require("express").Router();
//importing registerUser that was exported from authController if the export was made default in controller then we don't have to use curlybraces
const {registerUser, loginUser, logoutUser} = require("../controller/authController");


//router.route("/register").post(registerUser) line in authRoute can be considered a route handler. It specifies that the registerUser function should be invoked when there is an HTTP POST request to the "/register" endpoint.
//Defining routes/paths
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
// Logout route
router.post('/logout', logoutUser);



//module.exports is not a function; it is a special object in Node.js that allows you to expose functionality from one module and make it available for use in another module. It is a part of the CommonJS module system, which is the module system used by Node.js.
//module is a global object in Node.js that represents the current module.exports is a property of the module object.module.exports is an object that is initially empty.
//This line exports the router instance created with express.Router().When another module uses require to import this module, it will receive the router instance.

module.exports = router;









/*

When you assign a value to module.exports within a module, you are specifying what will be exported when another module requires or imports that module. It allows you to expose functions, objects, or any other value to other parts of your application.

Here's a simple example:

/myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

module.exports = myFunction;
In this example, myFunction is assigned to module.exports. When another module requires this module, it will get the value assigned to module.exports, which is myFunction in this case.

/app.js
const myFunction = require('./myModule');

myFunction(); // This will print 'Hello from myFunction!'
This mechanism allows you to structure your Node.js applications into modular components, making your code more maintainable and organized.

*/






