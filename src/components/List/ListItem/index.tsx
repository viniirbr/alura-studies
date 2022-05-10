import { Task } from '../../../types';
import style from './ListItem.module.scss';


interface ListItemProps extends Task {
  selectTask: (task: Task) => void;
}

export function ListItem({ name, duration, completed, selected, id, selectTask }: ListItemProps) {
  return (
    <li
      className=
      {`${style.item} 
      ${selected ? style.itemSelecionado : null} 
      ${completed ? style.itemCompletado : null}`}
      onClick={() => !completed && selectTask({
        name,
        duration,
        completed,
        selected,
        id
      })}>
      <h3>{name}</h3>
      <span>{duration}</span>
      {completed && <span className={style.concluido} aria-label="Tarefa completada"></span>}
    </li>
  )
}
