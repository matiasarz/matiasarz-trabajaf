import { Link } from 'react-router-dom';
import './Pasillo.css';

const Pasillo = ({ data }) => {

    const { pasillo, rack } = data;

    if(pasillo === undefined) {
        return
    }

    return (
        <>
            <h1>Pasillo</h1>
            <div className='pasilloContainer'>
                {
                    pasillo.map(item => <Link to='rack'><h2 key={item} >{item}</h2></Link>)
                }
            </div>
        </>
    )
}

export default Pasillo
