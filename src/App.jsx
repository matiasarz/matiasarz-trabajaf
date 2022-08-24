import { useState } from 'react';
import './App.css';
import DataProvider from './context/DataProvider'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repositor from './routes/Repositor';
import Inicio from './routes/Inicio';
import RepositorPasillo from './routes/RepositorPasillo';
import Rack from './routes/Rack';

const App = () => {

    const [ sendPulmon, setSendPulmon ] = useState('');

    return (
        <>
            <BrowserRouter>
                <div className="appContainer">
                    <DataProvider>
                        <Routes>
                            <Route path='/' element={<Inicio mensaje='Mensaje de bienvenida' />} />
                            <Route path='/repositor' element={
                                <Repositor title='Pulmones' setSendPulmon={setSendPulmon} />} 
                            />
                            <Route path={`/repositor/:id`} element={<RepositorPasillo />} />
                            <Route path='/repositor/:id/rack' element={<Rack />} />
                        </Routes>
                    </DataProvider>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
