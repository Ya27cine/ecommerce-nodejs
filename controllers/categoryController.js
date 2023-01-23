const Category = require("../models/category");


exports.allCategories = (req, res) => {
    Category.find().exec( (err, categories) => {
        if(err){
            return res.status(400).json({
                error: "bad request !"
            })
        }
        res.json({ categories })
    })
}

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



exports.updatCategory = (req, res) => {

    let category = req.category;

    category.name = req.body.name;

    category.save( (err, category) => {
        if(err){
            return res.status(400).json({
                error: "Category not Update !"
            })
        }

        res.json({
            message: "updated !",
            category: category
        })
    })
}

exports.deleteCategory = (req, res) => {
    let category = req.category;
    category.remove( (err, category) => {
        if(err){
            return res.status(404).json({
                error: "Category not found !!"
            })
        }
        res.status(204).json({message: "deleted !"})
    })
}



exports.showCategory = (req, res) => {
    const category = req.category;

    res.json({
        category: category
    })
}