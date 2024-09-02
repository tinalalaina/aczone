
import {Routes, Route} from 'react-router-dom';
import Home from './Component/Home'
import Header from './Component/Header/Header'
import Menu from './Component/Menu/Menu';
import Pages from './Component/Pages/Pages';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Addproduct from './Component/Add/Addproduct';
import Auth from './Component/Signin/Auth';
import ProtectedRoute from './Component/auth/ProtectedRoute';
import Addusser from './Component/Add/Addusser';
function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path="/menu" element= { <Menu/> } />
        <Route path="/pages" element= {<ProtectedRoute><Pages/></ProtectedRoute> } />
        <Route path="/About" element= { <ProtectedRoute><About/></ProtectedRoute> } />
        <Route path="/Ajouter" element= { <ProtectedRoute><Addproduct/></ProtectedRoute> } />
        <Route path="/Ajouteruser" element= {<Addusser/>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>  
      <Footer/>
 </div>
  );
}

export default App;
