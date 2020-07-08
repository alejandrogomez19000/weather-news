import moment from "moment";

export const parseUnixDate = (date) => moment.unix(date).format("DD/MM");
export const getDay = (date) => moment.unix(date).get("day");
export const weekDays = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const errors = {
  401: "We encountered some problems with your credentials, please check your credentials and try again.",
  404: "We had a problem while connecting to the server, please check your internet connection and try again.",
};
