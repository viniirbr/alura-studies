import { Button } from '../Button';
import style from './Form.module.scss';

export function Form() {
    return (
        <form className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor="">Adicione um novo estudo</label>
                <input type="text" placeholder='O que você quer estudar?' id="task" required/>
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="">Tempo</label>
                <input type="time" id="time" required/>
            </div>
            <Button />
        </form>
    )
}
