import style from './ListItem.module.scss';


export interface ListItemProps {
    name: string,
    duration: number
}

export function ListItem({ name, duration }: ListItemProps) {
  return (
    <li className={style.item}>
        <h3>{name}</h3>

        <span>{duration}</span>
    </li>
  )
}
