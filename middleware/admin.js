// Middleware for handling auth
const {Admin} = require('../db/index')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username,password}= req.headers;
    Admin.findOne({
        username,
        password
    }).then(function(value){
        if(value){
            next();
        }
        else{
            res.json({
                msg:"User does not exist"
            })
        }
    })

}

module.exports = adminMiddleware;