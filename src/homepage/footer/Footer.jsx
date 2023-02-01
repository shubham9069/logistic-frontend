import React from 'react'
import './footer.css'
import { logo } from '../assest'

const Footer = () => {
  return (
    <>
    <div className ='footer section-padding'>
    <div className ='container d-flex justify-content-between Maxwidth-1200' Style={'grid-gap:30px'}>
        <div className ='footer-box d-flex flex-column'>
            <img src={logo}></img>
            <a className="address">Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</a>
            <div className='d-flex' Style={'grid-gap:10px'}>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-whatsapp"></i>
            </div>
        </div>
        <div className ='footer-box d-flex flex-column'>
                    <a>Home</a>
                    <a>service</a>
                    <a>customer</a>
                    <a>about</a>
                    <a>faq</a>
            
        </div>
        <div className ='footer-box d-flex flex-column'>
                    <a>contact us </a>
                    <a>registered office </a>
                    <a className="address">No. - B 44, 1st Floor, DDUTTL, Opp Kanteerava Studio, Yeshwanthpur, Bangaluru - 560022</a>
                    
            
        </div>
        <div className ='footer-box d-flex flex-column'>
                    <a>Corparate Office</a>
                    <a className="address">No. 272, Bharat Tower, Ashok Vihar Phase - 3, Futa Road, Near Krishna Chock, Gurugram - 122001<br/>
                        +91 - 9311693666<br/>
                        +91 - 8930768287<br/>
                        info@budgetlogisticspackers.com</a>
                    
                    
            </div>
        </div>
        <div/>
        
        <div className="footer-bottom ">
        <div className="container ">
            <p>Disclaimer : We own all rights to the content. Creative Commons.</p>
            <p>© Copyright 2018Budget Logistics and Packers</p>
        </div>
        </div>
        </div>
    </>
  )
}

export default Footer