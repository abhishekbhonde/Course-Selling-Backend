const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;
    User.create({
        username,
        password
    }).then(function(value){
        res.json({
            msg:"User created successfully"
        })
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response =await Course.find({});

    res.json({
        Course:response
    })

});

router.get('/users', async(req,res)=>{
    const response =await User.findOne({});
    res.json({
        User:response
    })
})

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});


router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router