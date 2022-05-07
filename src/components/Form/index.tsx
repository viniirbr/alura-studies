import React from 'react'
import { Button } from '../Button'

export function Form() {
    return (
        <form>
            <div>
                <label htmlFor="">Adicione um novo estudo</label>
                <input type="text" placeholder='O que você ques estudar?' id="task" required/>
            </div>

            <div>
                <label htmlFor="">Tempo</label>
                <input type="time" id="time" required/>
            </div>
            <Button />
        </form>
    )
}
