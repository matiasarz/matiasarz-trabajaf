import '../css-routes/Repositor.css';
import PulmonContainer from "../components/pulmonContainer/PulmonContainer";
import Boton from '../components/boton/Boton';

const Repositor = ({ title, setSendPulmon }) => {

    return (
        <div className="repoContainer">
            <Boton to='/'/>
            <p>El sector de reposición de planta alta se divide 5 buffers o pulmones, de lo cuales cada pulmón se subdivide en pasillos.</p>
            <h1>{title}</h1>
            <PulmonContainer setSendPulmon={setSendPulmon} />
        </div>
    )
}

export default Repositor
