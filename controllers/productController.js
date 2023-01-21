const Product     = require("../models/product");
const formidable  = require("formidable");
const fs          = require('fs');
const Joi         = require("joi");
const product = require("../models/product");

exports.createProduct = (req, res) => {

    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    // parse a file upload
    form.parse(req, (err, fields, files) => {
        if (err)
            return res.status(400).json({error: "Image could not uploaded !"});
        const product = new Product( fields );
        if(files.photo){
            // check size photo :
            if(files.photo.size > Math.pow(10, 6)){
                return res.status(400).json({
                    error: "Image Should be less than 1mb in size !"})
            }
            product.photo.data         = fs.readFileSync( files.photo.path );
            product.photo.contentType  = files.photo.type;
        }
        // Validation Object ?
        const schemaValidatorProduct = Joi.object({
                name: Joi.string().required(),
                description: Joi.string().required(),
                price: Joi.required(),
                category: Joi.required(),
                quantity: Joi.required(),
        });
        const { error } = schemaValidatorProduct.validate(fields);
        if( error ){
            return res.status(400).json({
                error: error.details[0].message
            })
        }
        // save product in DB
        product.save((err, product) => {
            if(err){
                return res.status(400).json({
                    error: "Product not Persist !! "
                })
            }// it's Ok 
            res.json({ product })
        })// end save
    });// end form
}

// Middleware :
exports.productById = (req, res, next, id) => {
   
    Product.findById(id).exec((err, product) => {
        if(err || ! product){
            return res.status(400).json({
                error: "Product Not Found !"
            })
        }

        req.product = product;
        next();
    })
}

exports.showProduct = (req, res) => {
    req.product.photo = undefined;
    res.json({
        product: req.product
    })
}