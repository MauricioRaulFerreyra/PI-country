const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

module.exports = {
  getAll: function (req, res, next) {
    let name = req.query.name
    if (name) {
      //const newName = name.charAt(0).toUpperCase() + name.slice(1)
      const country = Country.findAll({
        include: Activity,
        where: {
          name: { [Op.iLike]: `%${name}%` } // ilike no distingue mayuscula de minuscula
        }
      })
      country
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json('no countries found', err))
    } else {
      let data = Country.findAll({
        include: {
          model: Activity,
          atributes: ['name', 'difficulty', 'duration', 'season'],
          through: {
            atributes: []
          }
        }
      })
      data
        .then(aux => res.status(200).json(aux))
        .catch(err => res.status(404).json('not countries found', err))
    }
  },

  getById: function (req, res, next) {
    let newId = req.params.id
    if (newId) {
      let data = Country.findOne({
        include: Activity,
        where: {
          id: { [Op.iLike]: `%${newId}%` }
        }
      })
      data
        .then(aux => res.status(200).json(aux))
        .catch(err => res.status(404).json('not country found', err))
    } else {
      console.log('not country found')
      next(err)
    }
  },

  postActivity: async function (req, res, next) {
    try {
      let { name, difficulty, duration, season, idCountry } = req.body
      const data = await Activity.create({
        name,
        difficulty,
        duration,
        season
      })
      console.log(data)
      const country = await Country.findAll({
        where: {
          id: idCountry
        },
        attributes: ['id']
      })
      console.log(country)
      data.addCountry(country)
      res.status(200).json(data)
    } catch (err) {
      res.status(404).json('Activity do not created', err)
    }
  },

  // postActivity: async (req, res) => {
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
  //   res
  //     .status(200)
  //     .json({ message: 'Activity created successfully', c: country })
  // },

  getActivity: async function (req, res, next) {
    try {
      let allActivities = await Activity.findAll({
        atributes: ['name', 'difficulty', 'duration', 'season'],
        through: {
          atributes: []
        }
      })
      //console.log(allActivities)
      return res.status(200).json(allActivities)
    } catch (err) {
      res.status(404).json('no se encontraron actividades', err)
    }
    // let allActivities =  Activity.findAll()
    // return allActivities
    //   .then(data => res.status(200).json(data))
    //   .catch(err => res.status(404).json('no se encontraron actividades', err))
  }
}

/*
function getAll (req, res, next) {
  let name = req.query.name
  if (name) {
    //const newName = name.charAt(0).toUpperCase() + name.slice(1)
    const country = Country.findAll({
      include: Activity,
      where: {
        name: { [Op.iLike]: `%${name}%` } // ilike no distingue mayuscula de minuscula
      }
    })
    country
      .then(data => res.status(200).json(data))
      .catch(err => res.status(404).json('no countries found', err))
  } else {
    let data = Country.findAll({
      include: {
        model: Activity,
        atributes: ['name', 'difficulty', 'duration', 'season'],
        through: {
          atributes: []
        }
      }
    })
    data
      .then(aux => res.status(200).json(aux))
      .catch(err => res.status(404).json('not countries found', err))
  }
}
*/
/*
function getById (req, res, next) {
  let newId = req.params.id
  if (newId) {
    let data = Country.findOne({
      include: Activity,
      where: {
        id: { [Op.iLike]: `%${newId}%` }
      }
    })
    data
      .then(aux => res.status(200).json(aux))
      .catch(err => res.status(404).json('not country found', err))
  } else {
    console.log('not country found')
    next(err)
  }
}
*/
/*
async function postActivity (req, res, next) {
  let { name, difficulty, duration, season, idCountry } = req.body
  let activity = await Activity.create({
    name,
    difficulty,
    duration,
    season
  })
  console.log(activity)
  const country = await Country.findAll({
    where: {
      id: idCountry
    },
    attributes: ['id']
  })
  console.log(country)
  activity.addCountry(country)

  res.status(200).json({ message: 'Activity created successfully', c: country })
}
*/
/*
function getActivity (req, res, next) {
  const allActivity = Activity.findAll({})
  allActivity
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json('no se encontraron actividades', err))
}
*/
