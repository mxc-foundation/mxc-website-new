import React from 'react';
import { StyledDashboard } from './Dashboard.styled';
import Widget from './Widget';

const Dashboard = () => {
	return (
		<StyledDashboard>
			<Widget title="Market Price" content="$0.004" />
			<Widget title="Daily Transactions (Avg.)" content="300" />
			<Widget title="Staked" content="$500,000" />
			<Widget title="Connected Devices" content="32,000" />
		</StyledDashboard>
	);
};

export default Dashboard;
