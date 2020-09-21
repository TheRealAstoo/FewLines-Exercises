const { readCode } = require("camp2-helpers");
const faker = require("faker");
jest.mock("faker", () => {
  const merge = require("lodash.merge");
  const mock = {
    name: {
      firstName: function () {
        return "John";
      },
      lastName: function () {
        return "Doe";
      },
      jobDescriptor: function () {
        return "Lorem Ipsum";
      },
      jobTitle: function () {
        return "CEO";
      },
    },
    address: {
      city: function () {
        return "Paris";
      },
    },
    phone: {
      phoneNumber: function () {
        return "012345678";
      },
    },
    company: {
      companyName: function () {
        return "Fewlines";
      },
      catchPhrase: function () {
        return "Few lines of code are better than a thousand words.";
      },
    },
    lorem: {
      paragraph: function () {
        return "Lorem Ipsum";
      },
    },
    image: {
      avatar: function () {
        return "https://avatar.com";
      },
    },
  };

  return merge(jest.requireActual("faker"), mock);
});

const testIdentity = {
  firstName: "John",
  lastName: "Doe",
  city: "Paris",
  phoneNumber: "012345678",
  email: "John.Doe@fake.local",
  avatar: "https://avatar.com",
};

const testCurrentJob = {
  companyName: "Fewlines",
  jobDescriptor: "Lorem Ipsum",
  jobTitle: "CEO",
};

const testMotivation = {
  catchPhrase: "Few lines of code are better than a thousand words.",
  description: "Lorem Ipsum",
};

describe("Fake CV", () => {
  describe("#identity", () => {
    let identity;
    beforeAll(() => {
      identity = require("../src/fakeCv/identity");
    });

    it("Should be a function", () => {
      expect(identity).toBeInstanceOf(Function);
    });

    it("Should import 'faker'", async () => {
      const code = await readCode("./src/fakeCv/identity.js");
      expect(code).toMatch(`const faker = require("faker")`);
    });

    it("Should return an identity object", () => {
      const id = identity();
      expect(id).toBeInstanceOf(Object);
      expect(Object.keys(id)).toEqual(["firstName", "lastName", "city", "phoneNumber", "email", "avatar"]);
    });
  });

  describe("#motivation", () => {
    let motivation;
    beforeAll(() => {
      motivation = require("../src/fakeCv/motivation");
    });

    it("Should be a function", () => {
      expect(motivation).toBeInstanceOf(Function);
    });

    it("Should import 'faker'", async () => {
      const code = await readCode("./src/fakeCv/motivation.js");
      expect(code).toMatch(`const faker = require("faker")`);
    });

    it("Should return a motivation object", () => {
      const id = motivation();
      expect(id).toBeInstanceOf(Object);
      expect(Object.keys(id)).toEqual(["catchPhrase", "description"]);
    });
  });

  describe("#currentJob", () => {
    let currentJob;
    beforeAll(() => {
      currentJob = require("../src/fakeCv/currentJob");
    });

    it("Should be a function", () => {
      expect(currentJob).toBeInstanceOf(Function);
    });

    it("Should import 'faker'", async () => {
      const code = await readCode("./src/fakeCv/currentJob.js");
      expect(code).toMatch(`const faker = require("faker")`);
    });

    it("Should return a currentJob object", () => {
      const id = currentJob();
      expect(id).toBeInstanceOf(Object);
      expect(Object.keys(id)).toEqual(["companyName", "jobDescriptor", "jobTitle"]);
    });
  });

  describe("#fakeCv", () => {
    let fakeCv;
    beforeAll(() => {
      fakeCv = require("../src/fakeCv");
    });

    it("Should return a CV object", () => {
      const cv = fakeCv();
      expect(cv).toBeInstanceOf(Object);
      expect(Object.keys(cv).sort()).toEqual(["identity", "motivation", "currentJob"].sort());
    });

    describe("CV identity", () => {
      it("Should have valid information, coming from 'faker' functions", () => {
        const { identity } = fakeCv();
        expect(identity).toEqual(testIdentity);
      });
    });

    describe("CV motivation", () => {
      it("Should have valid information, coming from 'faker' functions", () => {
        const { motivation } = fakeCv();
        expect(motivation).toEqual(testMotivation);
      });
    });

    describe("CV current job", () => {
      it("Should have valid information, coming from 'faker' functions", () => {
        const { currentJob } = fakeCv();
        expect(currentJob).toEqual(testCurrentJob);
      });
    });
  });
});
