import { useState } from "react"
import Text from "../components/icons/Text"

const Form = ({ dateM, tasks, setTasks }) => {
  const [val, setVal] = useState("")
  const [color, setColor] = useState("#f87171") // Color por defecto

  const handleInput = (e) => {
    e.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      date: dateM,
      tasks: val,
      done: false,
      color: color // Usa el color seleccionado
    }

    setTasks([...tasks, newTask])
    setVal("")
    setColor("#f87171") // Reinicia el color si lo deseas
  }

  return (
    <section className="max-w-[450px] m-auto my-3 px-4">
      <div className="border border-black rounded bg-gray04 flex items-center p-2 gap-2">
        <span className="text-gray02"><Text/></span>
        <form 
          onSubmit={handleInput}
          className="w-full flex gap-2 items-center">
          <input 
            className='w-full bg-transparent outline-none'
            type="text" 
            placeholder='Add a task...'
            value={val}
            onChange={e=>setVal(e.target.value)}
          />
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            title="Selecciona un color"
            style={{ width: 32, height: 32, border: "none", background: "none", cursor: "pointer" }}
          />
        </form>
      </div>
    </section>
  )
}

export default Form