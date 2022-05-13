import { createContext, useEffect, useState } from 'react'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filteredTodo, setFilteredTodo] = useState([])
    const [todoEdit, setTodoEdit] = useState({
        item: {},
        edit: false,
    })

    const [status, setStatus] = useState('all')

    // useEffect(() => {
    //     fetchTodo()
    // }, [])

    // const fetchTodo = async () => {
    //     const response = await fetch(
    //         `http://localhost:5000/todo?_sort=id&_order=desc`
    //     )

    //     const data = await response.json()

    //     setTodo(data)
    //     setIsLoading(false)
    // }

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodo(todo.filter((item) => item.completed === true))
                break
            case 'uncompleted':
                setFilteredTodo(todo.filter((item) => item.completed === false))
                break
            default:
                setFilteredTodo(todo)
                break
        }
    }

    useEffect(() => {
        filterHandler()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todo, status])

    const addTodo = async (newTodo) => {
        // const response = await fetch(`http://localhost:5000/todo`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newTodo),
        // })

        // const data = await response.json()

        newTodo.id = uuidv4()
        setTodo([data, ...todo])
    }

    const updateTodo = async (id, updItem) => {
        // const response = await fetch(`http://localhost:5000/todo/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(updItem),
        // })

        // const data = await response.json()

        const updateTodo = todo.map((item) =>
            item.id === id ? { ...item, ...updItem } : item
        )

        setTodo(updateTodo)
    }

    const editTodo = (item) => {
        setTodoEdit({
            item,
            edit: true,
        })
    }

    const deleteTodo = async (id) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            // await fetch(`http://localhost:5000/todo/${id}`, {
            //     method: 'DELETE',
            // })
            setTodo(todo.filter((item) => item.id !== id))
        }
    }

    const completedTodo = async (id, item) => {
        // const newTodo = {
        //     id: item.id,
        //     text: item.text,
        //     completed: !item.completed,
        // }

        // const response = await fetch(`http://localhost:5000/todo/${item.id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newTodo),
        // })

        // const data = await response.json()

        // setTodo(
        //     todo.map((item) => (item.id === id ? { ...item, ...data } : item))
        // )

        const completedTodo = todo.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        )

        setTodo(completedTodo)
    }

    return (
        <TodoContext.Provider
            value={{
                todo,
                setTodo,
                isLoading,
                setIsLoading,
                status,
                setStatus,
                todoEdit,
                setTodoEdit,
                filteredTodo,
                setFilteredTodo,
                addTodo,
                editTodo,
                completedTodo,
                deleteTodo,
                updateTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
