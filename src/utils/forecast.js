const request = require ('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e26fb8190b2f0a060d50a0abec89dd31&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json:true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another location', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0]+'. Hi :( .It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degrees out');
        }
    })
}

module.exports = forecast