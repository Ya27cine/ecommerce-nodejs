const Category = require("../models/category")

exports.categoryId = (req, res, next, id) => {

    Category.findById(id).exec( (err, category) => {

        if(err || ! category){
            return res.status(404).json({
                error: "Category Not Found !!"
            })
        }

        req.category = category;
        next();
    })
}