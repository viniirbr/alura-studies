import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/utils/timeToSeconds'
import { Task } from '../../types'
import { Button } from '../Button'
import style from './Cronometer.module.scss'
import { Watch } from './Watch'

interface CronometerProps {
  taskSelected: Task | undefined,
  finishTask: () => void
}

export function Cronometer({ taskSelected, finishTask }: CronometerProps) {

  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (taskSelected?.duration) {
      setTime(timeToSeconds(taskSelected.duration))
    }
  }, [taskSelected]);

  function startCounting(counter: number=0) {
    setTimeout(()=> {
      if (counter>0) {
        setTime(counter-1);
        return startCounting(counter-1);
      }
      finishTask();
    }, 1000)
  }

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch time={time}/>
      </div>
      <Button text='Iniciar' type='button' onClick={() => startCounting(time)}/>
    </div>
  )
}
