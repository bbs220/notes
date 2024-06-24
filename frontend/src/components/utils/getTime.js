export function getTime(dateString) {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

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

    const formattedDateString = `${day} ${monthName}, ${year}`;

    return formattedDateString;
  } catch (error) {
    console.error("Error formatting date:", error.message);
    return "";
  }
}
