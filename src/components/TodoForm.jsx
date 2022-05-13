import { useState, useEffect, useContext } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import TodoContext from '../context/TodoContext'

function TodoForm() {
    const { addTodo, updateTodo, todoEdit, setTodoEdit } =
        useContext(TodoContext)
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (todoEdit.edit === true) {
            setBtnDisabled(false)
            setText(todoEdit.item.text)
        }
    }, [todoEdit])

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (text.trim().length > 3) {
            const newTodo = {
                text,
                completed: false,
            }

            if (todoEdit.edit === true) {
                updateTodo(todoEdit.item.id, newTodo)
            } else {
                addTodo(newTodo)
            }

            setTodoEdit({
                item: {},
                edit: false,
            })
            setText('')
        }
    }

    const handleTextChange = (ev) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 3) {
            setMessage('Text must be at least 5 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(ev.target.value)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Youre Awesome! Write your notes!</h2>
                <div className="input-group" style={{ marginTop: '1rem' }}>
                    <input
                        onChange={handleTextChange}
                        type="text"
                        value={text}
                        placeholder="Write a note"
                        aria-label="Input Todo"
                    />
                    <Button
                        type="submit"
                        version="primary"
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default TodoForm
