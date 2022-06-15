import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    //se extrae a través de desestructuración la description del "values" que devuelve useForm, ya que este es un objeto y solo se tiene un campo, entonces es para hacer más descriptivo el proceso
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo)
        reset();

    }

    return (
        <>
            <h4> Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='description'
                    className='form-control'
                    placeholder='Aprender'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
