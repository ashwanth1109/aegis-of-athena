// https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const timeConversion = s => {
  const timeArray = s.split(":");
  let hour = timeArray[0];
  const min = timeArray[1];
  const temp = timeArray[2].split("");
  const sec = temp.splice(0, 2).join("");
  if (temp.join("") === "PM") {
    hour = (Number(hour) + 12).toString();
  }
  return [hour, min, sec].join(":");
};

timeConversion(`07:05:45PM`);
