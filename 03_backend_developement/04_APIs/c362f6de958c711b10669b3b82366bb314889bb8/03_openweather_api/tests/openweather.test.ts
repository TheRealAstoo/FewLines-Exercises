// @ts-nocheck
jest.mock("request")
import * as request from "request"
import { exec } from "child_process"
import { weatherByCity } from "../src/weatherByCity"
import { weatherByZipcode, weatherByLatitudeAndLongitude } from "../src/weatherByLocation"
import { london, forecast } from "./data"

const mockedLondonRequest = (request, callback) => {
  callback(null, {}, JSON.stringify(london))
}

const mockedForecastRequest = (request, callback) => {
  callback(null, {}, JSON.stringify(forecast))
}

const mockedErrorRequest = (request, callback) => {
  callback(new Error("This is a fake error"), {}, null)
}

const mockedErrorRequestWithResponse = (request, callback) => {
  callback(new Error("This is a fake error"), {}, JSON.stringify(london))
}

describe("OpenWeather API", () => {
  describe("#WeatherByCity", () => {
    afterEach(() => {
      request.mockReset()
    })

    it("Must use the 'request' package", () => {
      expect.assertions(1)
      request.mockImplementationOnce(() => {})

      weatherByCity("London")

      expect(request).toHaveBeenCalled()
    })

    test("The requested url must use 'process.env.OPENWEATHER_API_KEY' rather than hard coded api key", () => {
      expect.assertions(1)

      process.env.OPENWEATHER_API_KEY = "toto"
      request.mockImplementationOnce(() => {})

      weatherByCity("London")

      expect(request.mock.calls[0][0]).toBe("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=toto")
    })

    it("Must print the temperature in '°C' with 'console.log'", () => {
      expect.assertions(1)

      console.log = jest.fn()
      request.mockImplementationOnce(mockedLondonRequest)

      weatherByCity("London")

      expect(console.log).toHaveBeenCalledWith("12.4 °C")
    })

    it("Throws a 'console.error' when the API respond with error", () => {
      expect.assertions(1)
      
      console.error = jest.fn()
      request.mockImplementationOnce(mockedErrorRequest)
      
      weatherByCity("London")
  
      expect(console.error).toHaveBeenCalled()
    })

    it("Must not print anything with 'console.log' when an error is throwned", () => {
      expect.assertions(2)
  
      console.log = jest.fn()
      console.error = jest.fn()
      request.mockImplementationOnce(mockedErrorRequestWithResponse)
  
      weatherByCity("London")
  
      expect(console.log).not.toHaveBeenCalled()
      expect(request).toHaveBeenCalled()
    })
  })

  describe("#weatherByZipcode", () => {
    afterEach(() => {
      request.mockReset()
    })

    it("Must use the 'request' package", () => {
      expect.assertions(1)

      request.mockImplementationOnce(() => {})

      weatherByZipcode("59000", "fr")

      expect(request).toHaveBeenCalled()
    })

    test("The requested url must use 'process.env.OPENWEATHER_API_KEY' rather than hard coded api key", () => {
      expect.assertions(1)

      process.env.OPENWEATHER_API_KEY = "toto"
      request.mockImplementationOnce(() => {})

      weatherByZipcode("59000", "fr")

      expect(request.mock.calls[0][0]).toBe("http://api.openweathermap.org/data/2.5/forecast?zip=59000,fr&units=metric&cnt=16&appid=toto")
    })

    it("Must print requested informations with 'console.log'", () => {
      expect.assertions(2)

      console.log = jest.fn()
      request.mockImplementation(mockedForecastRequest)

      weatherByZipcode("59000", "fr")

      expect(console.log.mock.calls[0][0]).toEqual("Weather for Lille")
      expect(console.log.mock.calls[1][0]).toEqual({"date": "27/03/2020", "hour": "12:00:00", "temperature": "12.82 °C", "weather": "clear sky"})
    })

    it("Throws a 'console.error' when the API respond with error", () => {
      expect.assertions(1)
      
      console.error = jest.fn()
      request.mockImplementationOnce(mockedErrorRequest)
      
      weatherByZipcode("59000", "fr")
  
      expect(console.error).toHaveBeenCalled()
    })

    it("Must not print anything with 'console.log' when an error is throwned", () => {
      expect.assertions(2)
  
      console.log = jest.fn()
      console.error = jest.fn()      
      request.mockImplementationOnce(mockedErrorRequestWithResponse)
  
      weatherByZipcode("59000", "fr")

      expect(console.log).not.toHaveBeenCalled()
      expect(request).toHaveBeenCalled()
    })
  })

  describe("#weatherByLatitudeAndLongitude", () => {
    afterEach(() => {
      request.mockReset()
    })

    it("Must use the 'request' package", () => {
      request.mockImplementationOnce(() => {})

      weatherByLatitudeAndLongitude(32.661343, 51.680374)

      expect(request).toHaveBeenCalled()
    })

    test("The requested url must use 'process.env.OPENWEATHER_API_KEY' rather than hard coded api key", () => {
      expect.assertions(1)

      process.env.OPENWEATHER_API_KEY = "toto"

      request.mockImplementationOnce(() => {})

      weatherByLatitudeAndLongitude(32.661343, 51.680374)

      expect(request.mock.calls[0][0]).toBe("http://api.openweathermap.org/data/2.5/forecast?lat=32.661343&lon=51.680374&units=metric&cnt=16&appid=toto")
    })

    it("Must print requested informations with 'console.log'", () => {
      expect.assertions(2)

      console.log = jest.fn()
      request.mockImplementation(mockedForecastRequest)

      weatherByLatitudeAndLongitude(32.661343, 51.680374)

      expect(console.log.mock.calls[0][0]).toEqual("Weather for Lille")
      expect(console.log.mock.calls[1][0]).toEqual({"date": "27/03/2020", "hour": "12:00:00", "temperature": "12.82 °C", "weather": "clear sky"})
    })

    it("Throws a 'console.error' when the API respond with error", () => {
      expect.assertions(1)
      
      console.error = jest.fn()    
      request.mockImplementationOnce(mockedErrorRequest)

      weatherByLatitudeAndLongitude(32.661343, 51.680374)
  
      expect(console.error).toHaveBeenCalled()
    })

    it("Must not print anything with 'console.log' when an error is throwned", () => {
      expect.assertions(2)
  
      console.log = jest.fn()
      console.error = jest.fn()
      request.mockImplementationOnce(mockedErrorRequestWithResponse)
  
      weatherByLatitudeAndLongitude(32.661343, 51.680374)
  
      expect(console.log).not.toHaveBeenCalled()
      expect(request).toHaveBeenCalled()
    })
  })
})
