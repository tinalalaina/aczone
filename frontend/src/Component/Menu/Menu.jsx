import React, { useState, useEffect } from "react";
import './Menu.css'
import Paris from '../photo/paris.jpg';
import London from '../photo/london2.jpg';
function Menu() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = () => {
        fetch("http://localhost/reactcrudphp/aczone/api/product.php")
            .then(res => { return res.json() })
            .then(data => { setProduct(data) })
            .catch(error => { console.log(error) });
    }
    getProduct();
}, []);
  return (
    <div class='container'>
      <div class="row">
        <div class='col cont'>
          <div className="controlcol2">
            <div class="col">
            <img class="w3-image" src={Paris} alt="paris" width="auto" height="400px" />                     
            </div>
            <div class="col">
              <div class="contenuhalf">
                <div className="titre h1 fw-bold">
                <i class="fab fa-periscope"></i> Paris
                </div>
                <div className="titre2 h2">
                Fri 27 Nov
                </div>
                <div className="titre3 h6">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
 {
                                    product.map((pdata, index) => (

      <div class="row"   key={index}>
        <div class='col cont'>
          <div className="controlcol2">
            <div class="col">
            <img class="w3-image" src={`http://localhost/reactcrudphp/aczone/images/${pdata.pfile}`} alt="Fashion Blog" width="auto" height="400px" />
                                           
            </div>
            <div class="col">
              <div class="contenuhalf">
                <div className="titre h1 fw-bold">
                <i class="fab fa-periscope"></i> {pdata.ptitle}
                </div>
                <div className="titre2 h2">
                {pdata.pprice}
                </div>
                <div className="titre3 h6">
                {pdata.pstockinitiale} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 ))
}

<div class="row">
        <div class='col cont'>
          <div className="controlcol2">
            <div class="col">
            <img class="w3-image" src={London} alt="london2" width="auto" height="400px" />                     
                                           
            </div>
            <div class="col">
              <div class="contenuhalf">
                <div className="titre h1 fw-bold">
                <i class="fab fa-periscope"></i> London
                </div>
                <div className="titre2 h2">
                Fri 27 Nov
                </div>
                <div className="titre3 h6">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu