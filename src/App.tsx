import styles from './App.module.css'
import './global.css';
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { TasksList } from './components/TasksList';
import { useState } from 'react';

export interface ITasks {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([
    // {
    //   id: "",
    //   content: "teste",
    //   isCompleted: false,
    // }
  ])

  function addTask (taskContent:string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskContent,
        isCompleted: false, 
        
      }
    ])
  }

  function deleteTask(taskId:string){
    const newTask = tasks.filter((task)=> task.id !== taskId)
    setTasks(newTask)
  }


  function handleTaskCompleted (taskId:string) {
    const newTasks = tasks.map(task => {
      if(task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      } return task
    })
    setTasks(newTasks)
  }

  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
          <InputTask onAddTask={addTask} />
        <main>
          <TasksList handleDelete={deleteTask} tasks={tasks} onComplete={handleTaskCompleted}/>
        </main>
        </div>
    </div>
  )
}

export default App
