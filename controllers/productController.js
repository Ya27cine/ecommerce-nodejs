const Product     = require("../models/product");
const formidable  = require("formidable")
const fs          = require('fs')

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