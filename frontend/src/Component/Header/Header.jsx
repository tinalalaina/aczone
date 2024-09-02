import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
    return (
<div>
<nav class="navbar navbar-expand-lg navbar-light bghead">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">AcZone</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
         <Link class="nav-link fw-bold" to="/"><i class="fas fa-tachometer-alt"></i>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold" to="/menu"><i class="fas fa-home"></i> Menu</Link>
        </li>
        <li class="nav-item fw-bold">
          <Link class="nav-link fw-bold" to="/pages"><i class="fas fa-pager"></i>  Pages</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold" to="/about"><i class="fas fa-info-circle"></i> About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
                  
</div>
    )
}

export default Header