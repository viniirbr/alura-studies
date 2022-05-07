import React from 'react'

export interface ListItemProps {
    name: string,
    duration: number
}

export function ListItem({ name, duration }: ListItemProps) {
  return (
    <li>
        <h3>{name}</h3>

        <span>{duration}</span>
    </li>
  )
}
