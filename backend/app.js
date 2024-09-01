const express = require("express");
const app = express();
const {sequelize} = require('./models'); // Import sequelize from models
const path = require("path");
const router = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/login', router);

router.use(express.static(path.join(__dirname, '../public')));


sequelize.sync({force: false})
    .then(() => {
        console.log("DB synced successfully.");
    })
    .catch((error) => {
        console.error('Failed to sync database:', error);
    });

module.exports = app;
