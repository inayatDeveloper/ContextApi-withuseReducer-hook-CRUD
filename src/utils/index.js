const dateTime = () => {
  let today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(),
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    dateTime = date + " " + time;
  return dateTime;
};
export default dateTime;
