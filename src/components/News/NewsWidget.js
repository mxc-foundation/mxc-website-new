import React from 'react';
import { Widget, WidgetImage, WidgetTitle, WidgetBlurb } from './News.styled';

const NewsWidget = ({ image, title, blurb }) => {
	return (
		<Widget>
			<WidgetImage>{image}</WidgetImage>
			<WidgetTitle>{title}</WidgetTitle>
			<WidgetBlurb>{blurb}</WidgetBlurb>
		</Widget>
	);
};

export default NewsWidget;
