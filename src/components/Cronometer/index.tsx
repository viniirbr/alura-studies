import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/utils/timeToSeconds'
import { Task } from '../../types'
import { Button } from '../Button'
import style from './Cronometer.module.scss'
import { Watch } from './Watch'

interface CronometerProps {
  taskSelected: Task | undefined
}

export function Cronometer({ taskSelected }: CronometerProps) {

  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (taskSelected?.duration) {
      setTime(timeToSeconds(taskSelected.duration))
    }
  }, [taskSelected])

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <p>{time}</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button text='Iniciar' type='button' />
    </div>
  )
}
