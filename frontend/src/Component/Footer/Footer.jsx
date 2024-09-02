import React from 'react';

import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col">
                <div className="grostore">
                   AcZone
                </div></div>
            <div className="col">
                <p className='foot1'>Quick Link</p>
                <p className='foot2'><Link class="nav-link" to="/"><i class="fas fa-tachometer-alt"></i> Home</Link></p>
                <p className='foot2'><Link class="nav-link" to="/menu"><i class="fas fa-home"></i> Menu</Link></p>
                <p className='foot2'><Link class="nav-link" to="/pages"><i class="fas fa-pager"></i> Pages</Link></p>
                <p className='foot2'><Link class="nav-link" to="/about"><i class="fas fa-info-circle"></i> About</Link></p>
                <p className='foot2'><Link class="nav-link" to="/auth"><i class="fab fa-connectdevelop"></i> Sign in</Link></p>
            </div>
            <div className="col">
                <p  className='foot1'>Terms & Privacy</p>
                <p  className='foot2'>Trust & safety</p>
                <p  className='foot2'>Terms of Service</p>
                <p  className='foot2'>Privacy Policy</p>
            </div>
            <div className="col">
                <p  className='foot1'>Get in Touch</p>
                
                <p  className='foot2'><i class="fas fa-mail-bulk"></i> tinalalaina14@gmail.com</p>
                <p  className='foot2'><i class="fas fa-phone-volume"></i> 0380646602</p>
                <p  className='foot2'><i class="fab fa-periscope"></i> Antananarivo</p>
            </div>
        </div>
        <p  className='foot1'>2024 AcRaky.All rights reserved</p>
    </div>
  )
}

export default Footer