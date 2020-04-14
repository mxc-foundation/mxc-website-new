import React from 'react';
import { StyledWidget } from './Dashboard.styled';

const Widget = ({ title, content }) => {
	return (
		<StyledWidget>
			<h4>{title}</h4>
			<h3>{content}</h3>
		</StyledWidget>
	);
};

export default Widget;
