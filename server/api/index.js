const express = require('express');
const router = express.Router();

router.use('/products', require("./products"));
router.use('/stores', require("./stores"));

module.exports = router;
