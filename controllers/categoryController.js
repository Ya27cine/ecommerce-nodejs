const Category = require("../models/category");

exports.createCategory = ( req, res) => {
    const category = new Category( req.body );

    category.save( (err, category) => {
        if(err || ! category){
            return res.status(400).json({
                error: "bad request !!"
            })
        }
        // return category
        res.json({category})
    })
}