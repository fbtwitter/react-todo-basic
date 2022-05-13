// import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'

function TodoItem({ item }) {
    const { editTodo, completedTodo, deleteTodo } = useContext(TodoContext)

    return (
        <Card>
            <p
                className={`text-display ${
                    item.completed === true ? 'text-completed' : ''
                }`}
            >
                {item.text}
            </p>
            <button
                className="completed"
                onClick={() => completedTodo(item.id, item)}
            >
                <FaCheck color="#242533" />
            </button>
            <button className="edit" onClick={() => editTodo(item)}>
                <FaEdit color="#242533" />
            </button>
            <button className="close" onClick={() => deleteTodo(item.id)}>
                <FaTimes color="#242533" />
            </button>
        </Card>
    )
}

export default TodoItem
