import { Link, useParams } from 'react-router-dom';
import { getData } from '../pulmonContainer/PulmonContainer';
import { useState, useEffect } from 'react';
import LinkNavigate from '../linkNavigate/LinkNavigate';
import './PasilloContainer.css';
import ButtonNavigation from '../button_navigation/ButtonNavigation';

const PasilloContainer = () => {
	const [data, setData] = useState([]);
	const { param_pulmon } = useParams();
	const { protocol, host } = window.location;
	useEffect(() => {
		getData(`${protocol}//${host}/locations.json`)
			.then((res) => res.json())
			.then((data) =>
				setData(data.find((item) => item.id === parseInt(param_pulmon)))
			);
	}, [param_pulmon, protocol, host]);
	const { pasillo } = data;
	const links = [
		{ link: '/', name: 'Inicio' },
		{ link: '/reposicion', name: 'Pulmones' },
	];

	if (!pasillo) return <h2>Cargando</h2>;

	return (
		<section className="pasillo-container">
			<ButtonNavigation
				toLink="/reposicion"
				title="volver"
				className="back"
			/>
			<h1>Pasillo</h1>
			<LinkNavigate links={links} />
			<p>
				<b>
					Una vez realizado el paso anterior llevamos las cubetas al
					pasillo correspondiente.
				</b>
			</p>
			<div className="pasillo-container">
				{pasillo.map((item) => (
					<Link
						className="pasilloLink"
						to={`/reposicion/pulmon/${data.pulmon}/pasillo/${item}`}
						key={item}
					>
						<h2>{item}</h2>
					</Link>
				))}
			</div>
		</section>
	);
};

export default PasilloContainer;
