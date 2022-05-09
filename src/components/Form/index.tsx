import React, { useState } from 'react';
import { Button } from '../Button';
import { Task } from '../../../src/types';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid'


interface FormProps {
    onTaskAdded: (React.Dispatch<React.SetStateAction<Task[]>>);
}

export function Form(props: FormProps) {
    
    const [taskName, setTaskName] = useState('');
    const [duration, setDuration] = useState('00:00:00');

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onTaskAdded((previousTasks) => [...previousTasks,{name: taskName, duration: duration, selected: false, completed: false, id: uuidv4()}]);
        setTaskName("");
        setDuration("");
    }

    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="">Adicione um novo estudo</label>
                <input
                    type="text"
                    placeholder='O que você quer estudar?'
                    id="task"
                    required
                    value={taskName}
                    onChange={(e) => { setTaskName(e.target.value) }} />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="">Tempo</label>
                <input
                    type="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    step="1"
                    required
                    value={duration}
                    onChange={(e) => { setDuration(e.target.value) }} />
            </div>
            <Button text='Adicionar' type='submit'/>
        </form>
    )
}
