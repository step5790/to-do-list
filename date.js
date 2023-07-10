let whatDay = "";
// jshint esversion: 6

exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (currentDay = today.toLocaleDateString("en-us", options));
};

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return (currentDay = today.toLocaleDateString("en-us", options));
};
