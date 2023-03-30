const express = require('express')
const router = express.Router();
const User = require('../Models/userModel');

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    const newUser = new User({ name, email, password })

    try {
        newUser.save()
        res.send('User Register Successfully')
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email })
        if (user.length > 0) {
            const currentUser={ 
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currentUser)
        }else{
            return res.status(400).json({ message: 'User Login Failed 🛑'})
        }

        // If the email and password match, generate and send a JWT token for authentication
        // const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        // res.send({token: token})
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})


module.exports = router