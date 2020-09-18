import moment from "moment";

const formatDate = (date) => {
  return moment(date).format("dddd Do MMMM YYYY");
};

const yearsSinceDate = (date) => {
  let today = moment();
  return today.diff(moment(date), "years");
};

const getDayFromDate = (date) => {
  return moment(date).format("dddd");
};

const daysSinceDate = (date) => {
  let today = moment();
  return today.diff(moment(date), "days");
};

export {formatDate, yearsSinceDate, getDayFromDate, daysSinceDate};
console.log("formatDate =>", formatDate("2000-05-31")); // Wednesday 31st May 2000
console.log("yearsSinceDate =>", yearsSinceDate("2000-05-31")); // 20
console.log("getDayFromDate =>", getDayFromDate("2000-05-31")); // Wednesday
console.log("daysSinceDate =>", daysSinceDate("2000-05-31")); // 7394
