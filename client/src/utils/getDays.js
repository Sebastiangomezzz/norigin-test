export const getDays = () => {
  //create a function that returns an array of 7 days, counting three days before today and three days after today, with fromat 'DDDD, DD.MM'
    const days = [];
    const today = new Date();
    for (let i = -3; i <= 3; i++) {
        const day = new Date(today);
        day.setDate(day.getDate() + i);
        days.push(day);
    }
    console.log(days);
    return days;
};
