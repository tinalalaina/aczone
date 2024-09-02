import React from 'react'
import './Home.css'
import IMG from './photo/natureboy.jpg'
import IMG1 from './photo/falls2.jpg'
import IMG2 from './photo/lights.jpg'
import IMG3 from './photo/hotel.jpg'
function Home() {
  return (
    <div className='Home'>
      <div className='body'>
        <div className='texte'>
          <div className='texte1'>
            Discover Tour Next
          </div>
          <div className='texte2 fw-bold'>
            ADVENTURE
          </div>
          <div className='texte1'>
            Bay & Delta tour package
          </div>
        </div>
      </div>
      <div className='partie2'>
        <nav class="navbar controlnav">
          <div className='controlnav1'>
            <div className='controlnav1a'>
              <i class="fab fa-accusoft"></i>
            </div>
            <div className='controlnav1b'>
              Tour & Travel Website
            </div>
          </div>
          <div className='controlnav2'>
            <div className='controlnav1a'>
              <i class="fab fa-alipay"></i>
            </div>
            <div className='controlnav1b'>
              Classic Italy Tour package
            </div>
          </div>
          <div className='controlnav3'>
            <div className='controlnav1a'>
              <i class="fas fa-ankh"></i>
            </div>
            <div className='controlnav1b'>
              Discover Japan Tour package
            </div>
          </div>
          <div className='controlnav4'>
            <div className='controlnav1a'>
              <i class="fab fa-airbnb"></i>
            </div>
            <div className='controlnav1b'>
              Great Barrier Reef & Sydney Package
            </div>
          </div>
        </nav>
      </div>

      <div className='partie3'>
        <div className='partiea container fw-bold'>
          TRIPS
        </div>
      </div>

      <div className='partie4'>
        <nav class="navbar controlnav4">
          <div>

          </div>
          <div>

            <button className='buttomsign h1'>Art</button>
            <button className='buttomsign h1'>Best Seller</button>
            <button className='buttomsign h1'>Nature</button>
            <button className='buttomsign h1'>City</button>
            <button className='buttomsign h1'>Seasonal</button>
          </div>
          <div>

          </div>

        </nav>
      </div>
      <div className='partie5'>
        <div className='row'>
          
          <div className='col'>
            <div className="card">
              <img class="w3-image" src={IMG} alt="Fashion Blog" width="auto" />
            </div>
          </div>
          <div className='col IMG3'>
            <div className="card ">
              <img class="w3-image " src={IMG3} alt="Fashion Blog" width="auto" />
            </div>
          </div>
          <div className='col  IMG1'>
            <div className="card">
              <img class="w3-image" src={IMG1} alt="Fashion Blog" width="auto" />
            </div>
          </div>
          <div className='col IMG2'>
            <div className="card ">
              <img class="w3-image" src={IMG2} alt="Fashion Blog" width="auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home