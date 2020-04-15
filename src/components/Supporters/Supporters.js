import React from 'react';
import { SupportersRow, Supporter, TheSupporters, Text } from './Supporters.styles';

const Supporters = () => {
	return (
		<SupportersRow>
			<h2>MXC Supporters</h2>
			<p>
				Our supporters believe heavily in the MXC vision for the Future of IoT. Our progress towards an
				open-source IoT network is made possible through their generous support.
			</p>
			<TheSupporters>
				<Supporter href="www.mxc.org">Image here</Supporter>
				<Supporter href="www.mxc.org">Image here</Supporter>
				<Supporter href="www.mxc.org">Image here</Supporter>
				<Supporter href="www.mxc.org">Image here</Supporter>
				<Supporter href="www.mxc.org">Image here</Supporter>
				<Supporter href="www.mxc.org">Image here</Supporter>
			</TheSupporters>
		</SupportersRow>
	);
};

export default Supporters;
