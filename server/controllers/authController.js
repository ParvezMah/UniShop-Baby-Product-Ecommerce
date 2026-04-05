import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const registerUser = asyncHandler(async (req, res)=> {
    console.log("req", req.body);
    const { name, email, password, role } = req.body;

    const userExists = User.findOne({ email});

    if (userExists) {
        res.status(400);
        throw new Error("User already exists, Try login");
    };

    /*
    part-1 : 48:00 : faces an error -> User already exists
    Error in Postman
    {
        "message": "User already exists, Try login",
        "stack": "Error: User already exists, Try login\n    at file:///D:/Youtube-Project/BabyMart/server/controllers/authController.js:12:15\n    
        at asyncUtilWrap (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\express-async-handler\\index.js:3:20)\n    
        at Layer.handleRequest (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\lib\\layer.js:152:17)\n    
        at next (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\lib\\route.js:157:13)\n    
        at Route.dispatch (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\lib\\route.js:117:3)\n    
        at handle (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\index.js:435:11)\n    
        at Layer.handleRequest (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\lib\\layer.js:152:17)\n    
        at D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\index.js:295:15\n    
        at processParams (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\index.js:582:12)\n    
        at next (D:\\Youtube-Project\\BabyMart\\server\\node_modules\\router\\index.js:291:5)"
    }
    */

    const user = await User.create({
        name,
        email,
        password,
        role,
        addresses: [],
        // wishlist: [],
        // cart: [],
        // orders: [],
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            addresses: user.addresses,
        })
    } else {
        res.status(400);
        throw new Error("Invalid user Data");
    }

    // res.status(200).json({
    //     message: "Register route is working",
    // })
});


export {
    registerUser
}