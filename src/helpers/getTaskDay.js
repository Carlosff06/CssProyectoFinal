export const getTaskDay = (date, tasks) => {

  const newTasks = tasks.filter(item => {
    return date.setHours(0,0,0,0) === new Date(item.date).setHours(0,0,0,0)
  })
  return newTasks
}