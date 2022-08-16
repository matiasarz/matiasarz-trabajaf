import Pulmon from "../components/pulmon/Pulmon";
import '../css-routes/Repositor.css';
import { Link } from 'react-router-dom';

const Repositor = ({ title }) => {
    return (
        <div className="repoContainer">
            <Link to='/' className="buttonBack">
                Volver
            </Link>
            <p>El sector de reposición de planta alta se divide 5 buffers o pulmones, de lo cuales cada pulmón se subdivide en pasillos.</p>
            <h1>{title}</h1>
            <Pulmon />
        </div>
    )
}

export default Repositor
