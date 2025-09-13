const express = require('express');
const router = express.Router();
const { dashboardProducts, dashboardVisitors } = require('../controllers/dashboard');

router.get('/products', dashboardProducts);
router.get('/visitors', dashboardVisitors);

module.exports = router;
