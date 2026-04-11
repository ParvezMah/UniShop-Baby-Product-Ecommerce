import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// createProduct
const createProduct = asyncHandler(async (req, res) => {
    const { 
        name, 
        description,
        price,
        category,
        brand,
        image,
        discountPercentage,
        stock,
     } = req.body;

     // check if product with same name exists
     const productExists = await Product.findOne({name});
     if(productExists){
        res.status(400);
        throw new Error("Product with this name already exists");
     }


     // upload image to cloudinary


     // create the product
     const product = await Product.create({
        name,
        description,
        price,
        category,
        brand,
        image,
        discountPercentage: discountPercentage || 0,
        stock: stock || 0,
        image: "",
     });

     if(product){
        res.status(201).json({
            success: true,
            product,
        })
     } else {
        res.status(400);
        throw new Error("Invalid product data");
     }

});


export {
    createProduct,
}