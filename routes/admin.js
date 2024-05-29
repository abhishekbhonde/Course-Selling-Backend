const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;
    Admin.create({
        username,
        password
    }).then(function(value){
        res.json({
            msg:"Admin created successfully"
        })
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title,description,imageLink,price}  = req.body;
    Course.create({
        title,
        description,
        price,
        imageLink
    }).then(function(value){
        res.json({
            msg:"Course created successfully", courseId: Course._id
        })
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.findOne({});
    res.json({
        courses:response
    })
});

module.exports = router;