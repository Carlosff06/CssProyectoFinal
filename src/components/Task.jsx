import Options from "./Options"
import { taskDone } from "../helpers/taskDone"

const Task = ({item, tasks, setTasks}) => {

  const handleDone = () => {
    setTasks(taskDone(item.id, tasks))
  }

  // Estilos condicionales para tarea completada
  const isDone = item.done
  const colorIndicator = isDone ? "#bdbdbd" : (item.color || "#a3a3a3")
  const textStyle = isDone
    ? { color: "#bdbdbd", textDecoration: "line-through", filter: "grayscale(1)" }
    : {}

  return (
    <div
      className="flex justify-between gap-4 items-center my-4"
      style={isDone ? { filter: "grayscale(1)" } : {}}
    >
      <span className="flex items-center gap-2">
        {/* Indicador de color */}
        <span
          style={{
            backgroundColor: colorIndicator,
            width: 16,
            height: 16,
            borderRadius: "50%",
            display: "inline-block"
          }}
        ></span>
        <input
          type="checkbox"
          className="checkbox"
          onClick={e=>handleDone(e)}
          defaultChecked={item.done}
        />
      </span>
      <p className="grow text-left" style={textStyle}>{item.tasks}</p>
      <span className="cursor-pointer">
        <Options 
          idTask={item.id} 
          tasks={tasks} 
          setTasks={setTasks}/>
      </span>
    </div>
  )
}

export default Task