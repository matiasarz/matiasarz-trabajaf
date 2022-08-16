import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <div className='appContainer'>
           <Outlet />
        </div>
    )
}

export default App
