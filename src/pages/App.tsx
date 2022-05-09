import { useState } from 'react';
import { Cronometer } from '../components/Cronometer';
import { Form } from '../components/Form';
import { List } from '../components/List';
import style from './App.module.scss'
import { Task } from '../../src/types'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskSelected, setTaskSelected] = useState<Task>();

  function selectTask(selectedTask: Task) {
    setTaskSelected(selectedTask);
    setTasks(tasks.map((task) => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false 
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form onTaskAdded={setTasks}/>
      <List list={tasks} selectTask={selectTask}/>
      <Cronometer taskSelected={taskSelected}/>
    </div>
  );
}

export default App;
