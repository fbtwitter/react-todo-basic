// import { useState, useEffect } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import TodoProperties from '../components/TodoProperties'
import { TodoProvider } from '../context/TodoContext'

function HomePage() {
    return (
        <TodoProvider>
            <TodoForm />
            <TodoProperties />
            <TodoList />
        </TodoProvider>
    )
}

export default HomePage
