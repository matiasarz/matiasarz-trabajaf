import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./routes/Inicio";
import PulmonContainer from "./components/pulmonContainer/PulmonContainer";
import PasilloContainer from "./components/pasilloContainer/PasilloContainer";
import RackContainer from "./components/rackContainer/RackContainer";
import NotFound from "./components/NotFound404/NotFound";
import Location from "./components/locations/Location";

const App = () => {
    return (
        <main className="mainContainer">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/reposicion" element={<PulmonContainer />} />
                    <Route
                        path="/reposicion/pulmon/:npulmon/"
                        element={<PasilloContainer />}
                    />
                    <Route
                        path="/reposicion/pulmon/:npulmon/pasillo/:npasillo"
                        element={<RackContainer />}
                    />
                    <Route
                        path="/reposicion/pulmon/:npulmon/pasillo/:npasillo/rack/:nrack"
                        element={<Location />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
