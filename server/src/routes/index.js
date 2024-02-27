const express = require("express");

const router = express.Router();

    const getDrivers = require('../controllers/getDrivers')

    const getDriverById = require('../controllers/getDriverById')

    const get15Drivers = require('../controllers/get15Drivers')

    const postDrivers = require('../controllers/postDrivers')
    
    const getTeams = require('../controllers/getTeams')


router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriverById);
router.get("/drivers/name", get15Drivers);
router.post("/drivers", postDrivers);
router.get("/teams", getTeams);




module.exports = router;
