import { useFetch } from '../../hooks/useFetch';
import Pulmon from '../pulmon/Pulmon';

const PulmonContainer = ({setSendPulmon}) => {

    const { data, loading } = useFetch('http://localhost:3000/data.json');

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div className="pulmonContainer">
            {
                data.map(item => <Pulmon key={item.id} data={item} setSendPulmon={setSendPulmon} />)
            }
        </div>
    )
}

export default PulmonContainer
