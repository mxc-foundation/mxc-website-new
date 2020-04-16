import React from 'react';
import Layout from '../components/Global/Layout';
import Dashboard from '../components/Dashboard/Dashboard';
import Row from '../components/Row/Row';
import Whitepapers from '../components/Whitepapers/Whitepapers';
import Exchanges from '../components/Exchanges/Exchanges';
import Ambassadors from '../components/Ambassadors/Ambassadors';
import AmbassadorsMap from '../components/AmbassadorMap/AmbassadorMap';

const token = () => {
	return (
		<Layout>
			<Dashboard top="0" minHeight="13vh" />
			<Row
				title="About the MXC Token"
				text="MXC is an ERC20 utility token used for device transactions conducted through the MXC Supernode network. MXC adds value by giving the MXC community a chance to share in Supernode profits through staking."
			/>
			<Whitepapers />
			<Exchanges />
			<Ambassadors />
			<AmbassadorsMap />
		</Layout>
	);
};

export default token;
