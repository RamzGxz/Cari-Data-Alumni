import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import DataAlumni from './pages/DataAlumni';
import BursaKerja from './pages/BursaKerja';
import Kegiatan from './pages/Kegiatan';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  useEffect(() =>{
    AOS.init()
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/data-alumni' element={<DataAlumni/>}/>
        <Route path='/bursa-kerja' element={<BursaKerja/>}/>
        <Route path='/kegiatan' element={<Kegiatan/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
};

export default App;