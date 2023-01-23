const Category = require("../models/category")

exports.categoryId = (req, res, next, id) => {

    Category.findById(id).exec( (err, category) => {

        if(err){
            return res.status(404).json({
                error: "Category Not Found !!"
            })
        }

        req.category = category;
        next();
    })
}