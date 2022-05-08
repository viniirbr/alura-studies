import { ListItem, ListItemProps } from '../ListItem';
import style from './List.module.scss'

interface ListProps {
    list: ListItemProps[]
}

export function List({ list }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
        <ul>
            {list.map((item, key) => <ListItem name={item.name} duration={item.duration} key={key}/>)}
        </ul>
    </aside>
  )
}
