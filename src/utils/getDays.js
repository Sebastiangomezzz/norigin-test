export const getDays = () => {
  //create a function that returns an array of 7 days, counting three days before today and three days after today, with fromat 'DDDD, DD.MM'
  const days = [];
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  for (let i = -2; i < 3; i++) {
    const newDate = new Date(year, month, date + i);
    const dayName = dayNames[newDate.getDay()];
    const monthNumber = month > 9 ? month : `0${month}`;
    const dayNumber = newDate.getDate();
    const dayObj = {dayName, monthNumber, dayNumber};
    days.push(dayObj);
  }
  return days;
};
