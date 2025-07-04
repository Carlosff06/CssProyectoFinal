import { useState } from "react"
import Dots from "./icons/Dots"
import Popup from "./Popup"

const Options = ({ idTask, tasks, setTasks }) => {
  const [open, setOpen] = useState(false)
  
  const handleOptions = (e) => {
    console.log('option');
    setOpen(current => !current)
  }
  
  return (
    <span
      className="relative"
      onClick={handleOptions}
    >
      <Dots />
      { open && <Popup 
          idTask={idTask} 
          tasks={tasks} 
          setTasks={setTasks}/> }
    </span>
  )
}

export default Options