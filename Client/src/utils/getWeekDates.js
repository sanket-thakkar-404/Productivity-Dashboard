export const getWeekDate = (baseDate) => {
  const week = [];


  for (let i = 0; i < 7; i++) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + i)


    week.push({
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.toLocaleDateString("en-GB"), // dd/mm/yyyy
      fullDate: d, // future use
    })

  }

  return week;
}