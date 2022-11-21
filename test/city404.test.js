const app = require('../app')

const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');


describe('POST/api/cities',function(){


it('verificar status 400 al no poder crear una ciudad',function(){
const data = {
  name: '',
  continent:'',
  photo:"",
  population:'',
  userId:'',
}
request(app)
.post('/api/cities')
.send(data)
.set('Accept','aplication/json')
.expect('Content-Type', /json/)
.expect(400)
.expect('"city not created"')
.end(function(err,resp){
  if(err){
    return (err);
  }
  
})

})

})
