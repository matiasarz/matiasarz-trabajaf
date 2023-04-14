import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Inicio from './routes/Inicio';
import PulmonContainer from './components/pulmonContainer/PulmonContainer';
import PasilloContainer from './components/pasilloContainer/PasilloContainer';
import RackContainer from './components/rackContainer/RackContainer';
import NotFound from './components/NotFound404/NotFound';
import Location from './components/locations/Location';
import './App.css';
import BienvenidaContainer from './components/bienvenida/BienvenidaContainer';

const App = () => {
	const getData = (url) => fetch(url);

	return (
		<main className="main-app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<BienvenidaContainer />}
					/>
					<Route
						path="/reposicion"
						element={<PulmonContainer />}
					/>
					<Route
						path="/reposicion/pulmon/:param_pulmon/"
						element={<PasilloContainer />}
					/>
					<Route
						path="/reposicion/pulmon/:param_pulmon/pasillo/:param_pasillo"
						element={<RackContainer />}
					/>
					<Route
						path="/reposicion/pulmon/:param_pulmon/pasillo/:param_pasillo/rack/:param_rack"
						element={<Location getData={getData} />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
};

export default App;
