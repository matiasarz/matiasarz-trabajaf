import { Link } from 'react-router-dom';
import './Boton.css';

const Boton = ({ to }) => {

    return (
        <>
            <Link to={to} className="buttonBack">
                Volver
            </Link>
        </>
    )
}

export default Boton
