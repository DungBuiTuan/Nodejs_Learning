const express = require('express')
const router = express.Router()

const NewsController = require('../app/NewController')

router.use('/', NewsController.index)

module.exports = router; 