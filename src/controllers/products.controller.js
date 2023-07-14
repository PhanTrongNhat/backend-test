import ProductService from "../services/product.service.js"
const productsController = {};

ProductsController.getALlProduct = (req ,res)=> {
    try {
        const allProduct = ProductService.getALlProduct();
        res.status(200).json({
            products: allProduct
        })
    } catch (err) {
        res.status(400);
    }
};