const express = require("express");
const router = express.Router();
const path = require('path');
const User = require("../models/user");

router.get('/login', (req, res) => {
    const filePath = path.join(__dirname, '../public/login.html');
    console.log(filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('File not found:', err.message);
            res.status(404).send('File not found');
        }
    });
});

router.use(express.json());

router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({where: {phone_number: username}});
        if (user && user.password === password) {
            res.status(200).render('contact');
        } else {
            res.status(401).render('login');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).render("login").send('An error occurred trying to log in');
    }
});
module.exports = router;