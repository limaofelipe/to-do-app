import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./InputTask.module.css"
import { PlusCircle } from "@phosphor-icons/react";

interface Props {
  onAddTask: (taskContent:string) => void;
}

export function InputTask({onAddTask}: Props) {
  const [content, setContent] = useState(""); //Monitora os conteúdos e faz a alteração quando solicitado
  
  function handleCreateNewTask(event: FormEvent) { //Submit do formulário
    event?.preventDefault(); //Envia o form sem a necessidade de a página recarregar

    onAddTask(content); //propriedade recebida no app.
    setContent("")
  }

  function handleChangeContent (event: ChangeEvent<HTMLInputElement>){
    setContent(event.target.value)
  }

  const isNewTaskEmpty = content.length == 0

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
        <input 
          className={styles.inputNewTask} 
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeContent} 
          value={content}
        />
        <button
          type="submit"
          disabled={isNewTaskEmpty}
          onClick={handleCreateNewTask}
          className={styles.submitNewTaskButton}>
            Criar 
            <PlusCircle size={18}/>
        </button>
      </form>
    </div>
  )
}