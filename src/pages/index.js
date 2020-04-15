import React from 'react';
import Layout from '../components/Global/Layout';
import Hero from '../components/Hero/Hero';
import News from '../components/News/News';
import Supporters from '../components/Supporters/Supporters';
import Row from '../components/Row/Row';
import Dashboard from '../components/Dashboard/Dashboard';
import NotificationBar from '../components/NotificationBar/NotificationBar';
import Banner from '../components/Banner/Banner';
import { Buttons } from '../components/Button/Button.styled';
import Button from '../components/Button/Button';
import CoverImage from '../components/Hero/CoverImage';

export default () => (
	<Layout>
		<NotificationBar />
		<Hero home="true">
			<Banner
				title="Your Free Smart City IoT Network on Blockchain"
				info="MXC Supernodes provide LPWAN network services to devices around the world."
			/>
			<Buttons>
				<Button
					url="/supernode"
					bckColor="rgba(0, 0, 0, 0.3);"
					hBckColor={(props) => props.theme.primaryColor}
					txtColor={(props) => props.theme.textColor}
					hTxtColor={(props) => props.theme.navbarColor}
					brdrColor={(props) => props.theme.primaryColor}
					hBrdrColor={(props) => props.theme.primaryColor}
				>
					Learn About Supernodes
				</Button>
			</Buttons>
			<CoverImage />
		</Hero>
		<Dashboard />

		<Row
			title="The M2M Token"
			text="MXC is an ERC20 token used to top-up MXC Supernodes to cover downlink fees associated with LPWAN device roaming."
			cta="LEARN ABOUT MXC"
			placement="0"
			ctaUrl="/token"
		/>
		<Row
			title="Staking"
			text="Staking provides the MXC community members with the opportunity to share in MXC Supernode profits. A small percentage of all network fees transacted through a Supernode is split between the Supernode Operator, Supernode Stakers and the MXC Foundation."
			cta="Set a Stake"
			placement="2"
			boxShadow="0px 1px 15px #888;"
		/>
		<Row
			title="MXC Mining Hardware Manufactured by MatchX"
			text="Anyone is able to set up a LPWAN Gateway and earn MXC by sharing their network. When you join the network, MXC garauntees that your MXC Mining Hardware will earn MXC during the first year."
			cta="Start Mining"
			placement="0"
			boxShadow="inset 0px 1px 15px #888;"
			backgroundColor="#EBEFF2;"
		/>
		<News />
		<Supporters />
	</Layout>
);
