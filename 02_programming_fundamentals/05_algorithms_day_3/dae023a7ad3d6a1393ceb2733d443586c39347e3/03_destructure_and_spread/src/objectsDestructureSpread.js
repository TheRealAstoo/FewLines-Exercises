const userConfig = {
  user: {
    name: "John",
    password: "123123",
    admin: true,
  },
  hardware: {
    CPUThreads: 2,
  },
};

function getConfig(config = { user: userConfig }) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
      carNale: "plop",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };
  const { memory, diskSpace } = defaultConfig.hardware;

  const newConfig = {
    user: {
      ...userConfig.user,
    },
    hardware: {
      ...userConfig.hardware,
      memory,
      diskSpace,
    },
  };

  return newConfig;
}

getConfig();

function logInfos(user = {}) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };
  
  const userInfos = {
    ...redactedUser,
    ...user,
    address: {
      ...redactedUser.address,
      ...user.address,
    },
  };

  console.log(`${userInfos.firstName} ${userInfos.lastName} lives in ${userInfos.address.city}, ${userInfos.address.country}.`);
}

logInfos();


module.exports = {
  getConfig,
  logInfos,
};
