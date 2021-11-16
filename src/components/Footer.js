import React from 'react'
import './footer.css'

const Footer = () => {

    const year = new Date().getFullYear()

    return ( <footer>
        <p>My Academy © | All Rigths Reserved | {year} </p>
    </footer> );
}
 
export default Footer;