import * as request from "request";

function weatherByCity(city: string): void {
  request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`, function (error, response, body) {
    if (error) {
      console.error()
    } else {
      const bodyParsed = JSON.parse(body)
      console.log(`${bodyParsed.main.temp} °C`)
    }
  })
}
weatherByCity("Lille")


module.exports = { weatherByCity }


