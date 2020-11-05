import { ps4Games } from "./data/games";
import platforms from "./data/platforms";
import dotenv from "dotenv";

dotenv.config();

import {
  openBrowser,
  listItem,
  intercept,
  closeBrowser,
  goto,
  $,
  dropDown,
  click,
  text,
} from "taiko";

const ps4 = platforms.find((platform) => platform.slug === "ps4");

describe("Interact with APIs", () => {
  jest.setTimeout(5000);
  beforeEach(async () => {
    await openBrowser({ headless: true });
  });

  afterEach(async () => {
    await closeBrowser();
  });

  test("Should fetch 'GET /platforms' on load.", async (done) => {
    expect.assertions(1);
    let requestHasBeenMade = false;
    try {
      intercept(
        "https://videogames-sparta.herokuapp.com/platforms",
        (request) => {
          requestHasBeenMade = true;
          request.respond({ body: platforms });
        },
      );
      await goto(process.env.BASE_URL || "");
      expect(requestHasBeenMade).toBeTruthy();
      done();
    } catch (error) {
      done(error);
    }
  });

  it("Should have one select option for each platform", async (done) => {
    try {
      intercept("https://videogames-sparta.herokuapp.com/platforms", {
        body: platforms,
      });
      await goto(process.env.BASE_URL || "");
      const selectOptions = (await $("select").text()).split("\n");
      const platformsNames = platforms.map((platform) => platform.name);

      expect(selectOptions).toEqual(platformsNames);
      done();
    } catch (error) {
      done(error);
    }
  });

  it("Displays the selected platform's games", async (done) => {
    try {
      intercept("https://videogames-sparta.herokuapp.com/platforms", {
        body: [ps4],
      });
      await goto(process.env.BASE_URL || "");

      await dropDown().select("PlayStation 4");

      const wrappers = await (
        await listItem({ class: "list-group-item" })
      ).elements();

      const displayedGamesNames = (
        await Promise.all(wrappers.map((wrapper) => wrapper.text()))
      ).sort();

      const ps4GamesNames = ps4Games.map((game) => game.name).sort();

      expect(displayedGamesNames).toEqual(ps4GamesNames);
      done();
    } catch (error) {
      done(error);
    }
  });

  it("Should fetch 'GET /games/:slug' when clicking on a game element", async (done) => {
    expect.assertions(2);
    let requestHasBeenMade = false;
    let requestedUrl = "";
    const game = ps4Games[0];

    intercept("https://videogames-sparta.herokuapp.com/platforms", {
      body: [ps4],
    });

    intercept("https://videogames-sparta.herokuapp.com/games/*", (request) => {
      requestHasBeenMade = true;
      requestedUrl = request.request.url;
      request.respond({ body: game });
    });

    await goto(process.env.BASE_URL || "");
    await dropDown().select("PlayStation 4");
    await click(game.name);

    expect(requestHasBeenMade).toBeTruthy();
    expect(requestedUrl).toMatch(game.slug);
    done();
  });

  it("Should load the clicked game's data on the page (name, cover, summary).", async (done) => {
    expect.assertions(3);
    const game = ps4Games[0];

    intercept("https://videogames-sparta.herokuapp.com/platforms", {
      body: [ps4],
    });

    intercept("https://videogames-sparta.herokuapp.com/games/*", {
      body: game,
    });

    await goto(process.env.BASE_URL || "");
    await dropDown().select("PlayStation 4");
    await click(game.name);

    const isNamePresent = (await text(game.name).elements()).length === 2;
    expect(isNamePresent).toBeTruthy();

    const isCoverImgPresent = await $(`img[src="${game.cover.url}"`).exists();
    expect(isCoverImgPresent).toBeTruthy();

    const isSummaryPresent = await text(game.summary).exists();
    expect(isSummaryPresent).toBeTruthy();

    done();
  });
});
