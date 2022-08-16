import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repositor from './routes/Repositor';
import Inicio from './routes/Inicio';
import RepositorPasillo from './routes/RepositorPasillo';

const App = () => {

    const [ sendPulmon, setSendPulmon ] = useState('');

    return (
        <>
            <BrowserRouter>
                <div className="appContainer">
                    <Routes>
                        <Route path='/' element={<Inicio mensaje='Mensaje de bienvenida' />} />
                        <Route path='/repositor' element={
                            <Repositor title='Pulmones' setSendPulmon={setSendPulmon} />} 
                        />
                        <Route path={`/repositor/:${sendPulmon}`} element={<RepositorPasillo sendPulmon={sendPulmon} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
