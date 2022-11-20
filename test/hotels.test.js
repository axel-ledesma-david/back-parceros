const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe("GET /api/hotels/:id", function (){
    it("tiene que tirar error 404", function(){
        const idHotel = '636db9cefa9ea47f2c4e0ba0'
        request(app)
            .get('/api/hotels/'+ idHotel)
            .expect(response => {
                assert.strictEqual(response.body.message, 'Error 404 The hotel detail is not found', 'error 404 found')
            })
            .end(function (err, res){
                if (err){
                    return done(err)
                }
                done() 
            })
    })
})

// .notPropertyVal(object, property, value, [message])