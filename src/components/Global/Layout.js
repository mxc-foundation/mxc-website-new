import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/Theme';
import { GlobalStyles } from './Global.styled';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Navbar />
			{children}
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
