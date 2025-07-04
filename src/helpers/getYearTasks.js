export const getYearTasks = (tasks) => {
  const years = ["2020","2021","2022","2023","2024","2025","2026","2027","2028"];

  let yearTasks = years.map(item => {
    return {
      id: crypto.randomUUID(),
      year: item,
      tasks: []
    }
  })

  for (let j = 0; j < yearTasks.length; j++) {
    for (let k = 0; k < tasks.length; k++) {
      const taskYear = new Date(tasks[k].date).getFullYear()
      if (taskYear === Number(yearTasks[j].year)) {
        yearTasks[j].tasks.push(tasks[k])
      }
    }    
  }

  return yearTasks
}