import { openBrowser, closeBrowser, goto, $, click, text } from "taiko";

describe("React timers", () => {
  jest.setTimeout(5000);
  beforeEach(async () => {
    await openBrowser({ headless: true });
    await goto(process.env.BASE_URL || "");
  });

  afterEach(async () => {
    await closeBrowser();
  });

  it("Should have a 'Add a timer' button.", async (done) => {
    expect.assertions(1);
    const isButtonPresent = await text("Add a timer").exists();

    expect(isButtonPresent).toBeTruthy();
    done();
  });

  it("Should create new timers when click on 'Add a timer'.", async (done) => {
    expect.assertions(2);
    await click("Add a timer");
    await click("Add a timer");
    await click("Add a timer");

    const deleteButtons = await $(".btn.btn-danger").elements();
    const timers = await text("Delete").elements();

    expect(deleteButtons).toHaveLength(3);
    expect(timers).toHaveLength(3);
    done();
  });

  it("Should remove a timer when click on its 'Delete' button.", async (done) => {
    expect.assertions(1);
    await click("Add a timer");
    await click("Add a timer");
    await click("Add a timer");
    const timers = await text("Delete").elements();
    await click("Delete");
    const timersAfterDelete = await text("Delete").elements();

    expect(timersAfterDelete).toHaveLength(timers.length - 1);
    done();
  });
});
