import Task from './components/Task'
import { useState } from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import { useRef } from 'react'

function App() {
  const [list, setList] = useState([])
  const [item,setItem] = useState("")

  const inputRef = useRef(null)

  function addTask(){
    setList([...list,{
      id: nanoid(),
      item: item

    }])
    inputRef.current.value = ""
    inputRef.current.focus()
    console.log(list)
  }

  function removeTask(id){
    setList(list.filter((task) => {
      return task.id !== id
    } ))
  }

  

  const TaskElements = list.map(task => (
     <Task
        id={task.id}
        item={task.item}
        removeTask={removeTask}
     />
  ))



  return (
    <div className="App">
      <div className='Header'>
        <h1>To-Do-List</h1>
        <div className='inputBar'>
          <input ref={inputRef} onKeyDown={(event) => {if(event.keyCode == 13) addTask()}} type="text" placeholder='task....' onChange={(event) => setItem(event.target.value)}/>
          <button onClick={addTask} >Add To List</button>
        </div>
        <hr />
      </div>
      {TaskElements}
    </div>
  )
}

export default App
