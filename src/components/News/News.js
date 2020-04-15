import React from 'react';
import { NewsRow, TitleBar, Title, Widgets } from './News.styled';
import NewsWidget from './NewsWidget';
import Button from '../Button/Button';

const News = () => {
	return (
		<NewsRow>
			<TitleBar>
				<Title>Recently Published</Title>
				<Button
					url="/blog"
					bckColor="rgba(0, 0, 0, 0.3);"
					hBckColor={(props) => props.theme.primaryColor}
					txtColor={(props) => props.theme.textColor}
					hTxtColor={(props) => props.theme.navbarColor}
					brdrColor={(props) => props.theme.primaryColor}
					hBrdrColor={(props) => props.theme.primaryColor}
				>
					View More Posts
				</Button>
			</TitleBar>
			<Widgets>
				<NewsWidget image="image" title="title" blurb="blurb" />
				<NewsWidget image="image" title="title" blurb="blurb" />
				<NewsWidget image="image" title="title" blurb="blurb" />
				<NewsWidget image="image" title="title" blurb="blurb" />
				<NewsWidget image="image" title="title" blurb="blurb" />
				<NewsWidget image="image" title="title" blurb="blurb" />
			</Widgets>
		</NewsRow>
	);
};

export default News;
