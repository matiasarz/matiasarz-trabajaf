import { Link, useParams } from 'react-router-dom';
import './RackItem.css';

const RackItem = ({ rack }) => {
	const { param_pulmon, param_pasillo } = useParams();

	if (!rack) return <h2>Cargando...</h2>;

	return (
		<Link
			to={`/reposicion/pulmon/${param_pulmon}/pasillo/${param_pasillo}/rack/${rack}`}
			className="rackNumber"
		>
			<h2>{rack}</h2>
		</Link>
	);
};

export default RackItem;
