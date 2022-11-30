const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe("DELETE /api/cities/:id", function (){
    it("tiene que ELIMINAR ciudad", function(){
        const idcity = '637fdb8aa0d4b4fd23273dc1'
        request(app)
            .get('/api/cities/'+ idcity)
            .expect(response => {
                assert.strictEqual(response.body.message, 'city deleted')
            })
            .end(function (err, res){
                if (err){
                    return done(err)
                }
                done() 
            })
    })
})