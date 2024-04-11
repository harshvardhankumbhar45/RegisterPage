const express = require("express");
const router = express.Router();
const Register = require('../Schema/Schema');
const bcrypt = require('bcrypt');

// get request for users
router.get('/', async (req, res) => {
  try {
    const User = await Register.find();
    res.send(User);
  } catch (error) {
    console.error(error);
  }
})

// register or signup route
router.post('/register', async (req, res) => {
    const {name, email, mobile, dob, password, confirmPassword} = req.body;
    if(!name || !email || !mobile || !dob || !password || !confirmPassword ){
        return res.status(400).json({
            error: "Please fill the above details"
        })
    }
    try {
            const userExist = await Register.findOne({email: email});
            if(userExist){
                return res.status(400).json({
                    error: "Email already exists"
                })
            } else if(password !== confirmPassword){
                return res.status(400).json({error: "Password are not matching"});
            }
            else{
                const User = new Register({name, email, mobile, dob, password, confirmPassword})
                await User.save();
                console.log(User);
                return res.status(201).json({
                    message: "Registration successful"
            });
            }
            
    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
})

// login route
router.post('/login', async (req, res) => {    
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log("Entered = "+password.length)
        if(!email || !password){
            return res.status(400).json({
                message: "Please, fill both the fields!!"
            })
        }
        const loginUser = await Register.findOne({email: email})
        console.log("loginUser = "+loginUser);
        if(loginUser){
            const isMatch = await bcrypt.compare(password, loginUser.password);
            console.log("LoginUser = " + loginUser.password.length);
            console.log(isMatch);
            if(!isMatch) 
            {
                res.status(404).json({
                    error: "Invalid Credentials!"
                })
            } else {
                res.status(200).json({
                    message: "Login successful"
                })
            }
        } else {
            res.status(400).json({
                error: "Invalid Credentials!!"
            })
        }


    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
})

// patch request for users
router.patch('/register/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const User = await Register.findByIdAndUpdate(_id, req.body, {new: true});
        res.status(200).json({
            message: "Updated successsfully"
        });
    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
})
module.exports = router;