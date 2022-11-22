const app = require('../app')

const chai = require('chai');
const assert = chai.assert;
const request = require('supertest')

describe('GET/api/cities',function(){


it('verificar que name sea un string',function(){

request(app)
.get('/api/cities')
.expect(response=>{
  assert.typeOf(response.body.response.name,'string','es un string ')
})
.end(function(err,resp){
  if(err){
    return done(err);
  }
  done();
})

})

})