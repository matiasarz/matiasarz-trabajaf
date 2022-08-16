import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Avatar.css';

const Avatar = ({ data }) => {

    const { nombre, saludo } = data;

    const [ pass, setPass ] = useState(false);
    
    const handleOn = () => setPass(true);
    const handleOff = () => setPass(false);
    
    const toggleOn = {
        visibility: 'visible'
    }
    const toggleOff = {
        visibility: 'hidden'
    }
    
    return (
        <Link to='/repositor'>
             <div 
                className='avatarCard'
                onMouseEnter={handleOn}
                onMouseLeave={handleOff}
            >
                <img src="https://us.123rf.com/450wm/robuart/robuart1808/robuart180800867/112004201-f%C3%A1brica-y-trabajadores-con-cajas-art%C3%ADculos-de-producci%C3%B3n-de-transporte-por-manos-de-empleados-o-carr.jpg?ver=6" alt="" style={pass ? toggleOff : toggleOn } />
                <h1 style={pass ? toggleOn : toggleOff}>{nombre}</h1>
                <h1 style={pass ? toggleOn : toggleOff}>{saludo}</h1>
            </div>
        </Link>
    )
}

export default Avatar
