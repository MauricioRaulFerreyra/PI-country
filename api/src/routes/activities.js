const express = require('express')
const router = express.Router()
//const { Activity, Country } = require('../db')
const { getActivity, postActivity } = require('../controllers')

router.post('/', postActivity)

// router.post('/', async (req, res) => {
//   const { name, difficulty, duration, season, idCountry } = req.body
//   const activity = await Activity.create({
//     name,
//     difficulty,
//     duration,
//     season
//   })
//   const country = await Country.findAll({
//     where: {
//       id: idCountry
//     },
//     attributes: ['id']
//   })
//   activity.addCountry(country)
//   res.status(200).json({ message: 'Activity created successfully', c: country })
// })

router.get('/', getActivity)

module.exports = router
