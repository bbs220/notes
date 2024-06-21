export function getTime(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();

  const monthIndex = date.getMonth();

  const year = date.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[monthIndex];

  let ordinalSuffix = "";
  const daySuffixes = ["th", "st", "nd", "rd"];
  const adjustedDay = day % 100 === 11 ? 12 : day % 10;
  const daySuffix = daySuffixes[adjustedDay];

  if ([11, 12, 13].includes(day)) {
    ordinalSuffix = "th";
  } else {
    ordinalSuffix = daySuffix;
  }

  const formattedDateString = `Created at : ${day}${ordinalSuffix} ${monthName}, ${year}`;

  return formattedDateString;
}
