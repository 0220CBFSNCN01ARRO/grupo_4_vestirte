const express = require('express');
const router = express.Router();

const dashboardApiController = require('../../controller/api/dashboardController')

//lista los productos end-point= http://127.0.0.1:3000/api/dashboard
router.get("/cards",dashboardApiController.cards)


module.exports = router;