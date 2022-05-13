import TodoItem from './TodoItem'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'

function TodoList() {
    const { filteredTodo, isLoading } = useContext(TodoContext)

    if (!isLoading && (!filteredTodo || filteredTodo.length === 0)) {
        return <p>No Todo yet!</p>
    }

    return (
        <div className="todo-list">
            {filteredTodo &&
                filteredTodo.map((item) => (
                    <TodoItem key={item.id} item={item} />
                ))}
        </div>
    )
}

export default TodoList
