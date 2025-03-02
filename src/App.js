import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'
import Landingpage from './components/Landingpage';
import ArteAmbiental from './components/ArteAmbiental'
import EducacionAmbiental from './components/EducacionAmbiental';
import ParticipacionCiudana from './components/ParticipacionCiudadana';
import Taller from './components/Taller'
function App() {
  return (
    <Router>
      <div className="App">

        <Header/>
        <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/arte_ambiental' element={<ArteAmbiental/>}/>
            <Route path='/educacion_ambiental' element={<EducacionAmbiental/>}/>
            <Route path='/participacion_ciudadana' element={<ParticipacionCiudana/>}/>
            <Route path='/talleres_sustentables' element={<Taller/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
