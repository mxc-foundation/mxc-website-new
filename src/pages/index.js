import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import News from '../components/News'
import Supporters from '../components/Supporters'
import Row from '../components/Row'
import Dashboard from '../components/Dashboard'
import NotificationBar from '../components/NotificationBar'


export default () => <Layout>
    <NotificationBar />
    <Hero />
    <Dashboard />
    <Row/>
    <Row />
    <Row />
    <News />
    <Supporters />


</Layout>
