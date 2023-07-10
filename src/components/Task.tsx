import { ITasks } from '../App';
import styles from './Task.module.css'
import { Trash, CheckCircle } from "@phosphor-icons/react";


interface Props{
  task: ITasks;
  handleDelete: (taskID: string) => void
  onComplete: (taskID: string) => void
}

export function Task({ task, handleDelete, onComplete }: Props) {
  

  return (
    <div className={styles.task}>
      <button onClick={() => onComplete(task.id)}  className={styles.checkContainer}>
        {task.isCompleted ? <CheckCircle weight="fill" size={20}/> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.content}
      </p>

      <button onClick={() => handleDelete(task.id)} className={styles.deleteButton}>
        <Trash size={18} />
      </button>
    </div>
  )
}