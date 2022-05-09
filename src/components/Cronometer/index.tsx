import { Button } from '../Button'
import style from './Cronometer.module.scss'
import { Watch } from './Watch'
export function Cronometer() {
  return (
    <div className={style.cronometer}>
        <p className={style.title}>Escolha um card e inicie o cronômetro</p>
        <div className={style.watchWrapper}>
            <Watch />
        </div>
        <Button text='Iniciar' type='button'/>
    </div>
  )
}
