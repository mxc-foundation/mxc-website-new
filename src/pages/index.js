import React from 'react';
import Layout from '../components/Global/Layout';
import Hero from '../components/Hero/Hero';
import News from '../components/News/News';
import Supporters from '../components/Supporters/Supporters';
import Row from '../components/Row/Row';
import Dashboard from '../components/Dashboard/Dashboard';
import NotificationBar from '../components/NotificationBar/NotificationBar';

export default () => (
	<Layout>
		<NotificationBar />
		<Hero />
		<Dashboard />
		<Row />
		<Row />
		<Row />
		<News />
		<Supporters />
	</Layout>
);
