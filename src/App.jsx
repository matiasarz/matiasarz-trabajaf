import './App.css';
import PulmonContainer from './components/pulmonContainer/PulmonContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PasilloContainer from './components/pasilloContainer/PasilloContainer';
import RackContainer from './components/rackContainer/RackContainer';

const App = () => {
    return (
        <div>
            <BrowserRouter> 
                <h1>App</h1>
                <Routes>
                    <Route path='/' element={<PulmonContainer />} />
                    <Route path='/:id' element={<PasilloContainer />} />
                    <Route path='/pasillo/:pedo' element={<RackContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
