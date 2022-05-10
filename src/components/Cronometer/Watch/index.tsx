import style from './Watch.module.scss'

interface WatchProps {
  time: number | undefined
}

export function Watch({ time = 0 }: WatchProps) {

  const minutes = Math.floor(time/60);
  const seconds = time%60;
  const [minutesDez, minutesUnit] = String(minutes).padStart(2, '0');
  const [secondsDez, secondsUnit] = String(seconds).padStart(2, '0');

  return (
    <>
        <span className={style.watchNumber}>{minutesDez}</span>
        <span className={style.watchNumber}>{minutesUnit}</span>
        <span>:</span>
        <span className={style.watchNumber}>{secondsDez}</span>
        <span className={style.watchNumber}>{secondsUnit}</span>
    </>
  )
}
