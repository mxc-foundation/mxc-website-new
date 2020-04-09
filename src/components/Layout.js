import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/layout.css'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme} from '../components/styled/StyledTheme'

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
    )
}

export default Layout