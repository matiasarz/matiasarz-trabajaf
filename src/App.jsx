import "./App.css";
import PulmonContainer from "./components/pulmonContainer/PulmonContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasilloContainer from "./components/pasilloContainer/PasilloContainer";
import RackContainer from "./components/rackContainer/RackContainer";
import Inicio from "./routes/Inicio";
import NotFound from "./components/NotFound404/NotFound";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/reposicion" element={<PulmonContainer />} />
                    <Route
                        path="reposicion/pasillo/:id"
                        element={<PasilloContainer />}
                    />
                    <Route
                        path="reposicion/pasillo/:num/:id"
                        element={<RackContainer />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
