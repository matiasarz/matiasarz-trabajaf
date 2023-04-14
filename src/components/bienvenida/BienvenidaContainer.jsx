import { useEffect, useState } from 'react';
import Avatar from '../avatar/Avatar';
import './BienvenidaContainer.css';

const BienvenidaContainer = ({ title_name }) => {
	const [avatar, setAvatar] = useState([]);
	const { protocol, host } = window.location;
	const getData = (url) => fetch(url);

	useEffect(() => {
		getData(`${protocol}//${host}/avatar.json`)
			.then((res) => res.json())
			.then((data) => setAvatar(data));
	}, [host, protocol, getData]);

	return (
		<section className="bienvenidoContainer">
			<h1>{title_name}</h1>
			<div className="avatarContainer">
				{avatar.map((avatar) => (
					<Avatar
						key={avatar.id}
						avatar={avatar}
					/>
				))}
			</div>
		</section>
	);
};

export default BienvenidaContainer;
