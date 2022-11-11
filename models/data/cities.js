let cities = [
  {
      name: "Rosario",
      continent: "America",
      photo: ["https://www.rosario3.com/__export/1659697789800/sites/rosario3/img/2022/08/05/img_20220805_074435_546_1.jpg_1756841869.jpg"],
      population: 948.312,
      userId: "636d864fec3e352a19f44e9f"
  },
  {
      name: "Buenos Aires",
      continent: "America",
      photo: ["https://media.a24.com/p/ccff8531f4051da0e8e4d5bf63b15327/adjuntos/296/imagenes/008/012/0008012236/desde-cuando-es-autonoma-la-ciudad-buenos-aires.jpeg"],
      population: 2.890151,
      userId: "636d864fec3e352a19f44e9f"
  },
  {
      name: "Rio de Janeiro",
      continent: "America",
      photo: ["https://www.turismobr.com/wp-content/uploads/2016/12/cristo-de-corcovado-760x500.jpg"],
      population: 6.742000,
      userId: "636d864fec3e352a19f44e9f"
  }, 
  {
      name: "Sao Paulo",
      continent: "America",
      photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6c/16/ce/caption.jpg?w=1200&h=-1&s=1"],
      population: 12.000000,
      userId: "636d864fec3e352a19f44ea0"
  },
  {
      name: "Miami",
      continent: "America",
      photo: ["https://www.cronista.com/files/image/401/401115/618bd34cdeec4.jpg"],
      population: 439.890,
      userId: "636d864fec3e352a19f44ea0"
  },
  {
      name: "Los Angeles",
      continent: "America",
      photo: ["https://www.visittheusa.mx/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d"],
      population: 3849000,
      userId:"636d864fec3e352a19f44ea0"
  },
  {
      name: "Dubai",
      continent: "Asia",
      photo: ["https://images.lucentcms.com/greca/2019/09/5d839d7238ed6-dubai.jpg"],
      population: 3331000,
      userId: "636d864fec3e352a19f44e9e"
  },
  {
      name: "Singapur",
      continent: "Asia",
      photo: ["https://images.ecestaticos.com/W2pxs9ji61perBXia5IeDq4qV5s=/0x33:650x400/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fcbb%2F0f3%2F406%2Fcbb0f340648730babb139a2bc2355366.jpg"],
      population: 5677000,
      userId: "636d864fec3e352a19f44e9e"
  },
  {
      name: "Londres",
      continent: "Europe",
      photo: ["https://a.cdn-hotels.com/gdcs/production49/d151/7c0d7d6b-3494-4b0d-b75c-fc33be8ebccf.jpg?impolicy=fcrop&w=800&h=533&q=medium"],
      population: 8982000,
      userId: "636d864fec3e352a19f44e9e"
  },
  {
      name: "Paris",
      continent: "Europe",
      photo: ["https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"],
      population: 2161000,
      userId: "636d864fec3e352a19f44e9d"
  },
  {
      name: "Tokio",
      continent: "Asia",
      photo: ["https://elviajerofeliz.com/wp-content/uploads/2020/05/Por-qu%C3%A9-Tokio-es-una-de-las-ciudades-m%C3%A1s-sorprendentes.jpg"],
      population: 12960000,
      userId: "636d864fec3e352a19f44e9d"
  },
  {
      name: "Moscù",
      continent: "Asia",
      photo: ["https://viajes.nationalgeographic.com.es/medio/2020/12/23/moscu2_eb9a0590_1200x630.jpg"],
      population: 11920000,
      userId: "636d864fec3e352a19f44e9d"
  }
]

require('dotenv').config()
require('../../config/database/database')
const City =require('../City')

cities.forEach(elemento =>{
  City.create({

    name: elemento.name ,
    continent: elemento.continent  ,
    photo: elemento.photo,
    population: elemento.population ,
    userId: elemento.userId ,
})
})
