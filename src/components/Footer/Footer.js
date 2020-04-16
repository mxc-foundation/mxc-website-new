import React from 'react';
import { Link } from 'gatsby';
import { StyledFooter, Column, Menu, MenuItem } from './Footer.styles';
import Company from '../constants/FooterCompany';
import Community from '../constants/FooterCommunity';
import Resources from '../constants/FooterResources';

const Footer = () => {
	return (
		<StyledFooter>
			<Column>
				Company
				<Menu>
					{Company.map((item, index) => {
						return (
							<MenuItem key={index}>
								<Link to={item.path}>{item.text}</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</Column>
			<Column>
				Community
				<Menu>
					{Community.map((item, index) => {
						return (
							<MenuItem key={index}>
								<Link to={item.path}>{item.text}</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</Column>
			<Column>
				Resources
				<Menu>
					{Resources.map((item, index) => {
						return (
							<MenuItem key={index}>
								<Link to={item.path}>{item.text}</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</Column>
		</StyledFooter>
	);
};

export default Footer;
