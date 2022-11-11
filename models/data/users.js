let users = [
    {
        "name": "Ignacio",
        "lastName": "Borraz",
        "age": 32,
        "email": "ignacioborraz@hotmail.com",
        "password": "Hola1234",
        "code": "code123",
        "verified": true,
        "logged": true
    },
    {
        "name": "Federico",
        "lastName": "Rojas",
        "age": 21,
        "email": "federojas@gmail.com",
        "password": "soyfede2222",
        "code": "code456",
        "verified": true,
        "logged": true
    },
    {
        "name": "IJosefina",
        "lastName": "Almada",
        "age": 26,
        "email": "josefinaalm@hotmail.com",
        "password": "pass3131",
        "code": "code789",
        "verified": true,
        "logged": true
    },
    {
        "name": "Natalia",
        "lastName": "Martinez",
        "age": 30,
        "email": "nataliamartinez@gmail.com",
        "password": "natinati2020",
        "code": "code146",
        "verified": true,
        "logged": true
    }
]

require('dotenv').config()
require('../../config/database/database')
const User = require('../User')



users.forEach(item => {
    User.create({
        name: item.name,
        lastName: item.lastName,
        role: 'user',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        age: item.age,
        email: item.email,
        password: item.password,
        code: item.code,
        verified: item.verified,
        logged: item.logged
    })
})