const express = require("express");
const app = express()
const router = express.Router();
const path = require('path');
const login = require("./Login");
const {port} = require("../config/config");



router.get('/', function (req, res, next) {
    res.render('index');
});

app.use('/', login);

router.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log('server is running ')
});

module.exports = router;


//
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



