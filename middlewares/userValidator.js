
module.exports.userSignUpValidator = (req, res, next) => {

    req.check('name', 'Name is required').notEmpty();

    req.check('email', 'Email is required')
       .notEmpty()
       .isEmail()


    req.check('password')
       .notEmpty()
       .isLength({min:6, max:12})
       .withMessage("Password must between 6 and 12 caracters !")

    const errors = req.validationErrors();

    if(errors) return res.status(400).json(errors)

    next();

}