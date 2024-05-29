const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhishekbhonde8:GvQ6QMaBs8Jmtmg1@cluster0.hrwm5lp.mongodb.net/newCourse');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    imageLink:String,
    price:String

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

// const mongoose = require('mongoose');



// mongoose.connect('mongodb+srv://abhishekbhonde8:GvQ6QMaBs8Jmtmg1@cluster0.hrwm5lp.mongodb.net/newCourse')

// const AdminSchema = new mongoose.Schema({
//     username:String,
//     password:String
// })

// const CourseSchema = new mongoose.Schema({
//     title:String,
//     description:String,
//     imageLink:String,
//     price:String,
   
// })



// const UserSchema = new mongoose.Schema({
//     username:String,
//     password:String,
//     purchasedCourses: [{
//         type: mongoose.Schema.Types.ObjectId,
//           ref: 'Course'
//      }]
// })

// const Admin = mongoose.model('Admin', 'AdminSchema')
// const User = mongoose.model('User', 'UserSchema')
// const Course = mongoose.model('Course','CourseSchema')

// module.exports({
//     Admin,
//     User,
//     Course
// })