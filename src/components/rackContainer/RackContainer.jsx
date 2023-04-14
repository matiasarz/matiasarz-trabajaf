import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getData } from '../pulmonContainer/PulmonContainer';
import RackItem from '../rackItem/RackItem';
import LinkNavigate from '../linkNavigate/LinkNavigate';
import ButtonNavigation from '../button_navigation/ButtonNavigation';

const RackContainer = () => {
	const [data, setData] = useState([]);
	const { param_pulmon, param_pasillo } = useParams();
	const { protocol, host } = window.location;

	useEffect(() => {
		getData(`${protocol}//${host}/locations.json`)
			.then((res) => res.json())
			.then((data) => {
				let filtro = data.reduce((acc, item) => {
					acc.push(item.rack);
					return acc
						.flat()
						.filter(
							(item) => item.pasillo === parseInt(param_pasillo)
						);
				}, []);

				setData(filtro.map((item) => item.racks).flat());
			});
	}, [param_pasillo, host, protocol]);
	const links = [
		{ link: '/', name: 'Inicio' },
		{ link: '/reposicion', name: 'Pulmones' },
		{
			link: `/reposicion/pulmon/${param_pulmon}`,
			name: 'Pasillo',
		},
	];

	if (!data) return <h2>Cargando...</h2>;

	return (
		<section className="rackContainer">
			<ButtonNavigation
				toLink={`/reposicion/pulmon/${param_pulmon}`}
				className="back"
				title="volver"
			/>
			<h1>Racks</h1>
			<LinkNavigate links={links} />
			<p>
				<b>
					Las cubetas se deberan reponer lo más proximas posible a la
					posicion del 28 del SDA "Sistema de automatización".
				</b>
			</p>
			<div className="rackNumberContainer">
				{data.map((item) => (
					<RackItem
						key={item}
						rack={item}
					/>
				))}
			</div>
		</section>
	);
};

export default RackContainer;
