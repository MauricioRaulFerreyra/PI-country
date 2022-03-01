const express = require('express')
const router = express.Router()
const { Activity, Country } = require('../db')
const { postActivity, getActivity } = require('../controllers')

router.post('/', postActivity)

router.get('/', getActivity)

module.exports = router
