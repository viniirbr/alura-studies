import { ListItem } from './ListItem';
import style from './List.module.scss'
import { Task } from '../../types'

export interface ListProps {
  list: Task[],
  selectTask: (task: Task) => void
}

export function List({ list, selectTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {list.map((item, key) => <ListItem {...item} key={item.id} selectTask={selectTask}/>)}
      </ul>
    </aside>
  )
}
