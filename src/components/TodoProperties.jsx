import { useContext } from 'react'
import TodoContext from '../context/TodoContext'

function TodoProperties() {
    const { filteredTodo, setStatus } = useContext(TodoContext)
    const handleStatusChange = (ev) => {
        setStatus(ev.target.value)
    }

    return (
        <div className="todo-properties">
            <h4>{filteredTodo.length} Tasks</h4>
            <select
                onChange={handleStatusChange}
                name="todos"
                className="todo-filter"
            >
                <option value="all">All</option>
                <option value="completed">Done</option>
                <option value="uncompleted">Not Done</option>
            </select>
        </div>
    )
}

export default TodoProperties
