const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('DELETE /api/shows/:id', function(){
    it('Debe borrar un show de un usuario en particular', function(){
        const idShow = '6386cce5b0d5757f3a5ea9d2'
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODM2ZTc5Nzg3MzVhMGI5MDljYmM2OSIsIm5hbWUiOiJkYW5pIiwicGhvdG8iOiJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvcG9ydHJhaXQtb2YteW91bmctc21pbGluZy1jYXVjYXNpYW4tbWFuLXdpdGgtY3Jvc3NlZC1hcm1zLXdlYXJpbmctcGljdHVyZS1pZDExNzExNjkxMDc_Yj0xJms9NiZtPTExNzExNjkxMDcmcz02MTJ4NjEyJnc9MCZoPWlxNXdzRll0dUR4MFVRblRlWW1WTE5HTVRQLS1fSFB0XzRzNzFkSjJOZkk9IiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njk3NzgyNzcsImV4cCI6MTY2OTg2NDY3N30.Wahz_Oky0DZm4S_Zt8bnrd7G-PjeQe7Igtjd5ZcjbSc' 
        const headers = `Bearer ${token}`
        request(app)
              .delete('/api/shows/'+idShow)
              .set('Authorization', headers )
              .expect(200)
              .end(function (err) {
                if(err){
                  return done(err)
                }
                done()
              })
    })
})