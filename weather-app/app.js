const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=9fca7885ebdebb479e33bfef54247bdc&query=37.8627,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current)
})