import { Link } from 'react-router-dom';
import './Pulmon.css';

const Pulmon = ({ data, setSendPulmon }) => {

    const { pulmon } = data;

    const handleClick = () => setSendPulmon(pulmon);

    return (
        <Link to={`${pulmon}`} >
            <div className="uniquePulmon" onClick={handleClick}>
                <h2>{pulmon}</h2>
            </div>
        </Link>
    )
}

export default Pulmon
