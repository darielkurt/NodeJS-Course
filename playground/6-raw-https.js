const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=9fca7885ebdebb479e33bfef54247bdc&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''


    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

     response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An Error',error)
})

request.end()