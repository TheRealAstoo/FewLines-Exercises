export const forecast = {
  "cod": "200",
  "message": 0,
  "cnt": 16,
  "list": [
      {
          "dt": 1585310400,
          "main": {
              "temp": 12.82,
              "feels_like": 7.67,
              "temp_min": 11.46,
              "temp_max": 12.82,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1016,
              "humidity": 52,
              "temp_kf": 1.36
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.27,
              "deg": 38
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-03-27 12:00:00"
      }
  ],
  "city": {
      "name": "Lille",
  }
}

export const london = {
  "coord": {
      "lon": -0.13,
      "lat": 51.51
  },
  "weather": [
      {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 12.4,
      "feels_like": 6.02,
      "temp_min": 11.67,
      "temp_max": 13.33,
      "pressure": 1022,
      "humidity": 34
  },
  "visibility": 10000,
  "wind": {
      "speed": 5.7,
      "deg": 80
  },
  "clouds": {
      "all": 84
  },
  "dt": 1585240817,
  "sys": {
      "type": 1,
      "id": 1414,
      "country": "GB",
      "sunrise": 1585201717,
      "sunset": 1585247001
  },
  "timezone": 0,
  "id": 2643743,
  "name": "London",
  "cod": 200
}
