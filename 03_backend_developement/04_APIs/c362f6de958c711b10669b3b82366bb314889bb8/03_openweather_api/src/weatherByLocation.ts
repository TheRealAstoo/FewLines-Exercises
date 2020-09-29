import * as request from "request"

function weatherByZipcode(zipcode: string, countryCode: string): void {
  request(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`, function (error, response, body) {
    if (error) {
      console.error()
    } else {
      const bodyParsed = JSON.parse(body)
      console.warn(bodyParsed)

      const unix_timestamp = bodyParsed.list[0].dt
      const date = new Date(unix_timestamp * 1000);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = "0" + date.getMinutes();
      const seconds = "0" + date.getSeconds();


      const formatedDate = `${day}/${month}/${year}`
      const formatedHour = `${hours}:${minutes}:${seconds}`
      const temperature = `${bodyParsed.list[0].main.temp} °C`
      const weather = `${bodyParsed.list[0].weather[0].description}`
      
      interface fullWeather {
        date: string, 
        hour: string,
        temperature: string,
        weather: string,
      }

      const fullWeather = {
        date: formatedDate,
        hour: formatedHour,
        temperature: temperature,
        weather: weather,
      }

      const regex = (/\\/g);
      for (const weatherElement in fullWeather) {
        weatherElement.replace(regex, "")
      }

      const formatedFullWeather = JSON.stringify(fullWeather)

      
      console.log(`Weather for ${bodyParsed.city.name}`)
      console.log(formatedFullWeather)
    }
      
  })
}

//function weatherByLatitudeAndLongitude(latitude: string, longitude: string) {
  // code the function here
//}

// leave lines below for tests to work properly
module.exports = {
  weatherByZipcode,
  //weatherByLatitudeAndLongitude
}
