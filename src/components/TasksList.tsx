import { ITasks } from "../App"
import { Task } from "./Task"
import styles from "./TasksList.module.css"
import iconNoTask from "../assets/iconNoTask.svg"
interface Props {
  tasks: ITasks[];
  handleDelete: (taskId:string) => void;
  onComplete: (taskId:string) => void;
}

export function TasksList({ tasks, handleDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return  (
    <section>
      <header className={styles.tasksHeader}>
        <div className={styles.createdTasks}>
          <h2>Tarefas Criadas</h2>
          <span>{tasksQuantity}</span>
        </div>
        <div className={styles.concludedTasks}>
          <h2>Concluídas</h2>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
          handleDelete={handleDelete}
          key={task.id}
          task={task}
          onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0  &&(
          <section className={styles.emptyTask}>
            <img src={iconNoTask} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>

  )
}