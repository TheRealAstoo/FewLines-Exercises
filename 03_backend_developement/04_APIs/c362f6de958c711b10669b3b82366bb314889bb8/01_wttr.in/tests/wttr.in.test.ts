// @ts-nocheck

const fs = require("fs");
const path = require("path");
const exec = require("./exec");

describe("Basic wttr.in request", () => {
  test("'01_current_weather.sh' should print the current weather near current location", async () => {
    expect.assertions(1);

    const file = () => path.resolve(__dirname, "../src/01_current_weather.sh");
    const studentOutput = await exec(`bash ${file()} 2> /dev/null`);
    const expectedOutput = await exec(`curl -s wttr.in`);

    expect(studentOutput).toEqual(expectedOutput)
  });
})

describe("Moscow weather", () => {
  test("'02_moscow_weather.sh' should print the weather of Moscow", async () => {
    expect.assertions(1);

    const file = () => path.resolve(__dirname, "../src/02_moscow_weather.sh");
    const studentOutput = await exec(`bash ${file()} 2> /dev/null`);
    const expectedOutput = await exec(`curl -s wttr.in/Moscow`);

    expect(studentOutput).toEqual(expectedOutput);
  });
})

describe("Berlin weather in German", () => {
  const file = () => path.resolve(__dirname, "../src/03_berlin_weather_in_german.sh");

  test("'03_berlin_weather_in_german.sh' should print the weather of Berlin", async () => {
    expect.assertions(1);

    const studentOutput = await exec(`bash ${file()} 2> /dev/null`);

    expect(/Berlin/.test(studentOutput)).toEqual(true);
  });

  test("'03_berlin_weather_in_german.sh' should print the weather of Berlin in German", async () => {
    expect.assertions(1);

    const studentOutput = await exec(`bash ${file()} 2> /dev/null`);
    const expectedOutput = await exec(`curl -s wttr.in/Berlin?lang=de`);

    expect(studentOutput).toEqual(expectedOutput);
  });
})

describe("Brussels weather written in file", () => {
  const commandFile = () =>
  path.resolve(__dirname, "../src/04_brussels_weather_in_french.sh");
  const resultFile = () => path.resolve(__dirname, "../src/brussels.weather");

  afterEach(() => {
    fs.existsSync(resultFile()) && fs.unlinkSync(resultFile());
  });

  test("'brussels.weather' file must exists", async () => {
    expect.assertions(1);

    const studentOutput = await exec(`bash ${commandFile()} 2> /dev/null`);

    expect(fs.existsSync(resultFile())).toBe(true);
  });

  test("'brussels.weather' should contain the weather for Brussels", async () => {
    expect.assertions(1);

    const studentOutput = await exec(`bash ${commandFile()} 2> /dev/null`);
    const weather = fs.readFileSync(resultFile(), "utf8");

    expect(/Brussels/.test(weather)).toBe(true);
  });

  test("'brussels.weather' should contain the weather for Brussels in french", async () => {
    expect.assertions(1);

    const studentOutput = await exec(`bash ${commandFile()} 2> /dev/null`);
    const weather = fs.readFileSync(resultFile(), "utf8");

    expect(weather.includes("Prévisions météo pour:")).toBe(true);
  });
})
