const express = require("express");
const path = require('path');
const app = express();
const router = express.Router();
const User = require("../models/user");

// app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

// -------------------------I should Add ejs file -----------------------




app.get('/login', function (req, res) {
    const filePath = path.join(__dirname, '../public/login.html');
    console.log(filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('File not found:', err.message);
            res.status(404).send('File not found');
        }
    });
});

app.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log(username, password);
        // res.sendFile("/home/navid/Desktop/Store_Navid/backend/public/product.html");


        const user = await User.findOne({where: {phone_number: username}});
        console.log(user)
        if (user && user.password === password) {
            res.status(200).sendFile('/home/navid/Desktop/Store_Navid/backend/public/contact.html');
        } else {
            res.status(401).sendFile('/home/navid/Desktop/Store_Navid/backend/public/login.html');
        }

    } catch (error) {
        console.error(`${error} occurred`);
        res.status(500).send('An error occurred trying to log in');
    }
});
app.get('/register', function (req, res) {
    const filePath = path.join(__dirname, '../public/register.html');
    console.log(filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('File not found:', err.message);
            res.status(404).send('File not found');
        }
    });
})

app.post('/register', async (req, res) => {
    try {
        const {name, password} = req.body;
        console.log(name, password);
        res.redirect("product.html");

    } catch (error) {
        console.error(`${error} occurred`);
        res.status(500).send('An error occurred trying to log in');
    }
})

app.get('/', function (req, res, next) {
    res.sendFile('/home/navid/Desktop/Store_Navid/backend/public/index.html');
});
// // Use the router for the root path
app.use('/', router);

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

module.exports = router;


// router.get('/Tops', function (req, res, next) {
//     res.render('tops');
// })
//
// router.get('/Tops/T-shirts', function (req, res, next) {
//     res.render('T-shirts');
// })
// router.get('/Tops/Crop-Tops', function (req, res, next) {
//     res.render('Crop-Tops');
//
// })
//
// router.get('/Bottoms', function (req, res, next) {
//     res.render('Bottoms');
// })
//
// router.get('/Bottoms/Pants', function (req, res, next) {
//     res.render('Pants');
// })
// router.get('/Bottoms/Skirts', function (req, res, next) {
//     res.render('Skirts');
//
// })
//
//
// router.get('/Footwear', function (req, res, next) {
//     res.render('Footwear');
// })
//
// router.get('/Footwear/shoes', function (req, res, next) {
//     res.render('shoes');
// })
//
//
// router.get('/Dress&One-Pieces', function (req, res, next) {
//     res.render('Dress&One-Pieces');
// })
//
// router.get('/Dress&One-Pieces/Bodysuit', function (req, res, next) {
//     res.render('Bodysuit');
// })
//
//
// router.get('/Intimates', function (req, res, next) {
//     res.render('Intimates');
// })
//
// router.get('/Intimates/Chemises', function (req, res, next) {
//     res.render('Chemises');
// })
//
// router.get('/Accessories', function (req, res, next) {
//     res.render('Accessories');
// })
//
// router.get('/Accessories/Bags', function (req, res, next) {
//     res.render('Bodysuit');
// })



