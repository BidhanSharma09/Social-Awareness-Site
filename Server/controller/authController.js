const User = require("../model/userModel")
//Controller -In the MVC pattern, a controller is responsible for handling user input, processing it, and updating the model or triggering a change in the view. In Express, controllers often contain the logic that handles a specific route or set of routes. Your registerUser function can be considered a controller in this context, as it processes the input (HTTP request) and interacts with the model (User model) to update the state of the application.
// "controller" is often used interchangeably with "route handler" in the context of Express applications, but they can have slightly different connotations in different architectural patterns.


//route handler is a part of the controller that handles the HTTP request for a specific endpoint
//RouteHandler for /register endpoint
//Controller is responsible for handling user input, processing it, and updating the model or triggering a change in the view.
exports.registerUser = async (req, res) => {
    console.log(req.body);
  
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
  
    try {
      // Check if the user already exists
      const userFound = await User.findOne({ email });
      if (userFound) {
        return res.status(400).json({
          message: "User already registered",
        });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the user
      await User.create({
        email: email,
        password: hashedPassword,
      });
  
      res.status(201).json({
        message: "User created successfully",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({
        message: "Server error. Please try again later.",
      });
    }
  };



const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Controller for handling login
exports.loginUser = async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;
  
  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send the response with the token
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};



exports.logoutUser = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Get token from "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Verify the token (optional)
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }

            res.status(200).json({ message: 'Logged out successfully' });
        });

    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};





//yesari garda ni vayo navaye direct export garda ni vayo mathi jasto

// const registerUser = ...

// module.exports ={
//     registerUser
// }