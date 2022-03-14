const request = require('supertest')('http://localhost:3001')
const expect = require('chai').expect

describe('test api ', () => {
  describe('ACTIVITIES', () => {
    it('GET activities deberia retornar un status 200', async () => {
      let response = await request.get('/activities')
      expect(response.status).to.eql(200)
    })

    it('GET activities inexistente deberia retornar un status 404', async () => {
      let response = await request.get('/activities/correr')
      expect(response.status).to.eql(404)
    })
    it('POST con activities nuevo deberia retornar un status 200', async () => {
      const newActivities = {
        name: 'correr',
        difficulty: '3',
        duration: 'dos horas',
        season: 'Verano',
        idCountry: 'ARG'
      }
      let response = await request.post('/activities/').send(newActivities)
      expect(response.status).to.eql(200)
    })
  })
})
