import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default App
