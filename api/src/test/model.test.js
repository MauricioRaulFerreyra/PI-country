const expect = require('chai').expect

// importo las funciones que voy a testear'
var Model = require('../controllers')
describe('Model', function () {
  // cada uno de los test arranca  vacío.
  beforeEach(function () {
    Model.reset()
  })

  describe('`getActivityTest` ', function () {
    it('Inicialmente devuelve un arreglo vacío', function () {
      expect(Model.getActivityTest()).to.eql([])
    })
  })

  it('Agrega actividades al array ', function () {
    Model.getPost({
      name: 'nadar',
      difficulty: '3',
      duration: 'dos horas',
      season: 'Verano',
      idCountry: 'ARG'
    })
    expect(Model.getActivityTest()).to.have.length(1)
  })
})
