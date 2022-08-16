import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';
import Repositor from './routes/Repositor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio mensaje='Mensaje de bienvenida' />} />
          <Route path='repositor' element={<Repositor title='Pulmones' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

