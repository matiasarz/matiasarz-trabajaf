import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { FaRegLaughWink } from 'react-icons/fa';
import LinkNavigate from '../linkNavigate/LinkNavigate';
import './Location.css';
import ButtonNavigation from '../button_navigation/ButtonNavigation';

const Location = ({ getData }) => {
	const [location, setLocation] = useState([]);
	const [locationModule, setLocationModule] = useState([]);
	// const [showModal, setShowModal] = useState(false);

	const { param_pulmon, param_pasillo, param_rack } = useParams();
	const { protocol, host } = window.location;

	useEffect(() => {
		getData(`${protocol}//${host}/positions.json`)
			.then((res) => res.json())
			.then((data) => {
				// filtro por el pasillo que elijo
				let pasillo_filtered = data.filter(
					(item) => item[`pasillo_${param_pasillo}`]
				);

				// llega un array con racks que lo recorro y almaceno uno especifico en racks
				const pasillo = pasillo_filtered.map(
					(item) =>
						item[`pasillo_${param_pasillo}`][
							`data_rack_${param_rack}`
						]
				);

				const rack = pasillo.map((item) => item[`rack_${param_rack}`]);
				const modulo = pasillo.map((item) => item[`modulo`]);

				setLocationModule(modulo);
				setLocation(rack.flat());
			});
	}, [param_pasillo, param_rack, host, protocol, getData]);

	const pathNames = [
		{ link: '/', name: 'Inicio' },
		{ link: '/reposicion', name: 'Pulmones' },
		{
			link: `/reposicion/pulmon/${param_pulmon}`,
			name: 'Pasillo',
		},
		{
			link: `/reposicion/pulmon/${param_pulmon}/pasillo/${param_pasillo}`,
			name: 'Rack',
		},
	];

	return (
		<section className="locationContainer">
			<ButtonNavigation
				toLink={`/reposicion/pulmon/${param_pulmon}/pasillo/${param_pasillo}`}
				title="volver"
				className="back"
			/>
			<div className="title">
				<h1>Cantidad de posiciones: {location.length}</h1>
				<h4>
					{param_pulmon} / {param_pasillo} / {param_rack}
				</h4>
			</div>
			<LinkNavigate links={pathNames} />
			<p>
				Las posiciones en el{' '}
				<b>
					pasillo {param_pasillo} del rack {param_rack}
				</b>{' '}
				están disponibles para reponer las cubetas con medicamentos que
				correspondan al{' '}
				<b>módulo {locationModule.flat().join(' y ')} del SDA.</b>
			</p>
			<article className="algoArticle">
				<ul className="algo">
					{location.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</article>
		</section>
	);
};

export default Location;
