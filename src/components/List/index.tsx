import { ListItem, ListItemProps } from './ListItem';
import style from './List.module.scss'

export interface ListProps {
    list: ListItemProps[]
}

export function List({ list }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
        <ul>
            {list.map((item, key) => <ListItem {...item} key={key}/>)}
        </ul>
    </aside>
  )
}
