export const getMonthTasks = (tasks) => {
  const dateNow = new Date()

  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  let newMonths = monthNames.map(item => {
    return {
      id: crypto.randomUUID(),
      month: item,
      year: dateNow.getFullYear(),
      tasks: []
    }
  })

  for (let j = 0; j < newMonths.length; j++) {
    for (let k = 0; k < tasks.length; k++) {
      const month = new Date(tasks[k].date).getMonth()
      if (month === j) {
        newMonths[j].tasks.push(tasks[k])
      }
    }    
  }

  return newMonths;
}