//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const axios = require('axios')
require('dotenv').config()
const { Op } = require('sequelize')
const { Country } = require('./src/db')

let API = process.env.apiAll

const getAll = async () => {
  try {
    let response = await axios(API)
    response = response.data.map(res => {
      return {
        id: res.cca3,
        name: res.name.common && res.name.common,
        image: res.flags && res.flags.map(flag => flag),
        continent: res.continents && res.continents.map(el => el),
        capital: res.capital ? res.capital.map(el => el) : ['no data'],
        subregion: res.subregion,
        area: res.area,
        population: res.population
      }
    })
    //console.log(response)
    return response
  } catch (err) {
    console.log(err)
  }
}

const getAllDb = async () => {
  try {
    let response = await getAll()
    response.map(el => {
      Country.findOrCreate({
        where: { name: el.name },
        defaults: {
          id: el.id,
          name: el.name,
          image: el.image,
          continent: el.continent,
          capital: el.capital,
          subregion: el.subregion,
          area: el.area,
          population: el.population
        }
      })
    })
    let data = await Country.findAll()
    //console.log(data)
    return data
  } catch (e) {
    console.log(e)
  }
}

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  getAllDb()
  server.listen(3001, () => {
    console.log('%s listening at 3001') // eslint-disable-line no-console
  })
})
