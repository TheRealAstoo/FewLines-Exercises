# OpenWeather API

## Context and Objectives

The goal of this exercise is to make some calls to the Open Weather API and to parse the payloads.

For this, you have to use your **[OpenweatherMap](https://openweathermap.org/)** API Key.

## Specs
> For each function you'll have to write, you should read the dedicated documentation here: https://openweathermap.org/api

### API Key
> ⚠️⚠️⚠️ **Don't commit your API Key on github** ⚠️⚠️⚠️

Once you have your API key activated it means that you are allowed to use OpenweatherMap's API.
You should create a `.env_vars` file in the root folder of the exercise and write the key in it:
```
export OPENWEATHER_API_KEY=<your_api_key>
```

Before commit, verify that the `.gitignore` file is taking care of the `.env_vars` file.

> ⚠️⚠️⚠️ **Don't commit your API Key on github** ⚠️⚠️⚠️

### `weatherByCity`

Code the function `weatherByCity` in `src/weatherByCity.ts`. It should get a city as input and prints the temperature from Open Weather such as:

```javascript
weatherByCity("Bogota")
> 17°C
```

### `weatherByZipcode`

Code the function `weatherByZipcode` in `src/weatherByLocation.ts` which must accept two parameters like `"59000", "fr"`

It should print `Weather for <city>`, then each forecast object containing the following keys:
- `date` in french format.
- `hour`.
- `temperature` in `°C`.
- `weather` description.

Like this: 
```javascript
weatherByZipcode("59000", "fr");
> Weather for Lille
> {
>   date: '27/03/2020',
>   hour: '12:00:00',
>   temperature: '15.05 °C',
>   weather: 'clear sky'
> }
> {
>   date: '27/03/2020',
>   hour: '15:00:00',
>   temperature: '15.3 °C',
>   weather: 'clear sky'
> }
> # [...]
```

### `weatherByLatitudeAndLongitude`

Code the function `weatherByLatitudeAndLongitude` in `src/weatherByLocation.ts` which must accept two parameters like `32.661343, 51.680374`

It should print `Weather for <city>`, then each forecast object containing the following keys:
- `date` in french format.
- `hour`.
- `temperature` in `°C`.
- `weather` description.

Like this: 
```javascript
weatherByLatitudeAndLongitude(32.661343, 51.680374);
> Weather for Isfahan
> {
>   date: '27/03/2020',
>   hour: '12:00:00',
>   temperature: '17.29 °C',
>   weather: 'broken clouds'
> }
> {
>   date: '27/03/2020',
>   hour: '15:00:00',
>   temperature: '16.97 °C',
>   weather: 'overcast clouds'
> }
> # [...]
```
