import { Form } from '../components/Form';
import { List } from '../components/List';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List list={[{name: "Dever", duration:3},{name: "Dever", duration:3}]}/>
    </div>
  );
}

export default App;
