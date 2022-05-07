import React from 'react'
import { ListItem, ListItemProps } from '../ListItem'

interface ListProps {
    list: ListItemProps[]
}

export function List({ list }: ListProps) {
  return (
    <aside>
        <ul>
            {list.map((item, key) => <ListItem name={item.name} duration={item.duration} key={key}/>)}
        </ul>
    </aside>
  )
}
