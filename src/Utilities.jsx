function getWeekday(inp) {
  const date = new Date(inp);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  return weekdays[dayIndex];
}

export { getWeekday };
