const express = require('express')
const router = express.Router()
//const { Activity, Country } = require('../db')
const { getActivity, postActivity } = require('../controllers')

router.post('/', postActivity)

router.get('/', getActivity)

module.exports = router
