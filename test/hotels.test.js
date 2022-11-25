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



describe('POST /api/hotels', function(){
    /* it('El dato Capacity enviado tiene que ser Number', function(){
        const newHotel = {
            name: "Hotel testing supertest",
            photo: ["https://digital.ihg.com/is/image/ihg/intercontinental-buenos-aires-3613388437-2x1?fit=fit,1&wid=2400&hei=1200&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"],
            capacity: 510,
            cityId: "636db9cefa9ea47f2c4e0b97",
            userId: ["636d864fec3e352a19f44e9f"]
        }

        const newHotel2 = 
            {
                name: "Hotel testing supertest N°2",
                photo: ["https://www.kayak.com.ar/rimg/himg/ab/64/d9/expediav2-38713-6584af-750938.jpg?width=720&height=576&crop=true"],
                capacity: ["striing"],
                cityId: "636db9cefa9ea47f2c4e0b97",
                userId: ["636d864fec3e352a19f44e9f"]
            }
        
        request(app)
            .post('/api/hotels')
            .send(newHotel2)
            .expect(res => {
                assert.isNumber(res.body.capacity, 'El dato enviado en capacity es un Number' )
            })
            .end(function(err, res){
                if(err){
                    done(err)
                }
                done()
            })
    }) */
    it('Tiene que mandar status 201', function(){
        const newHotelStatus = {
            name: "Hotel testing status 201",
            photo: ["https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg"],
            capacity: 600,
            cityId: "636db9cefa9ea47f2c4e0b97",
            userId: ["636d864fec3e352a19f44e9f"]
        }

        request(app)
          .post('/api/hotels')
          .send(newHotelStatus)
          .expect(res => {
                assert.strictEqual(res.status, 201)
          })
          .end((err, res)=> {
            if(err){
                done(err)
            } 
            done()
          })
    })
})

