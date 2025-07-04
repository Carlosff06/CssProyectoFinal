import Task from "./Task"

import { getTaskDay } from "../helpers/getTaskDay"

const ListTasks = ({ tasks, setTasks, dateM }) => {
  const currentTasks = getTaskDay(dateM, tasks)

  return (
    <section className='max-w-[450px] m-auto pb-7 pt-1 px-4'>
      {
        currentTasks.map(item => (
          <Task 
            key={item.id}
            item={item}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))
      }
    </section>
  )
}

export default ListTasks