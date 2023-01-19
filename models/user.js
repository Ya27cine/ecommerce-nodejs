const { v4: uuidv4 } = require('uuid');
const db = require("mongoose");
const crypto = require("crypto");


const userSchema = new db.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 250
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 250,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    about: {
        type: String,
        trim: true,
    },
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
}, {timestamps: true})

// Methods Virtual 
userSchema.methods = {
    isAuth: function(plainText){
        return this.cryptPassword(plainText) === this.hashed_password;
    },
    cryptPassword: function(password){
        if( ! password ) return '';

        try {
            return crypto
                    .createHmac('sha256', this.salt)
                    .update(password)
                    .digest('hex');
        } catch (error) {
            console.log( error )
        }
    },
    authentication: function(plainText){
        // return this.cryptPassword( plainText ) === this.hashed_password
    }
}

// Fields Virtual 
userSchema.virtual('password')
    .set( function(password){
        this._password = password;
        this.salt = uuidv4();
        this.hashed_password = this.cryptPassword(password);
    })
    .get(function(){return this._password})

module.exports = db.model("User", userSchema);