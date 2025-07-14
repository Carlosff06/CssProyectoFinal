
import Day from "./Day";
import Header from "./Header";
import ListTasks from "./ListTasks";
import Week from "./Week";
import Month from "./Month";
import Year from "./Year";
import { useEffect, useState } from "react";
import Form from "./Form";

const TodoList = () => {

    const [dateM, setDateM] = useState(new Date())

  const data = JSON.parse(localStorage.getItem('tasks'))

  const [tasks, setTasks] = useState(data?data:[])
  const [tab, setTab] = useState('day')

  //console.log(tasks);

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }, [tasks]);

  return (
    <div className='bg-gray03 text-white rounded max-w-[600px] m-auto'>
        <Header tab={tab} setTab={setTab} />
        {
          tab === 'day' && <>
            <Day dateM={dateM} setDateM={setDateM}/>
            <Form 
              dateM={dateM}
              tasks={tasks}
              setTasks={setTasks}
            />
            <ListTasks
              tasks={tasks}
              setTasks={setTasks}
              dateM={dateM}
            />
          </>
        }
        { tab==='week' && <Week tasks={tasks}/> }
        { tab==='month' && <Month tasks={tasks}/> }
        { tab==='year' && <Year tasks={tasks}/> }
      </div>
  )
}
export default TodoList;