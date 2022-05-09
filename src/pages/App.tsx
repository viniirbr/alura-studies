import { useState } from 'react';
import { Cronometer } from '../components/Cronometer';
import { Form } from '../components/Form';
import { List } from '../components/List';
import style from './App.module.scss'
import { ListItemProps } from '../components/List/ListItem';

function App() {
  const [tasks, setTasks] = useState([] as ListItemProps[]);

  function updateTasks(task: ListItemProps) {
    setTasks([...tasks, task]);
  }

  return (
    <div className={style.AppStyle}>
      <Form onTaskAdded={updateTasks}/>
      <List list={tasks}/>
      <Cronometer />
    </div>
  );
}

export default App;
