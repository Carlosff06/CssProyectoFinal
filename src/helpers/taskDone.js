export const taskDone = (id, tasks) => {
  const newTasks = tasks.map(item => {
    const idTask = item.id;
    let task = Object.assign({}, item)
    if (id === idTask) {
      task.done = !item.done
    }
    return task;
  })

  return newTasks;
}