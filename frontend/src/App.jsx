import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import DataAlumni from './pages/DataAlumni';
import BursaKerja from './pages/BursaKerja';
import Kegiatan from './pages/Kegiatan';
import Login from './pages/Login';
import Register from './pages/Register';
import LupaPassword from './pages/LupaPassword';
import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';
import Testimoni from './pages/Testimoni';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState([])

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
        <Route path='/data-alumni' element={<DataAlumni isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
        <Route path='/bursa-kerja' element={<BursaKerja isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
        <Route path='/kegiatan' element={<Kegiatan isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/changepassword' element={<LupaPassword />} />
        <Route path='/dashboard' element={<Dashboard setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} />} />
        <Route path='/edit' element={<Edit setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} />} />
        <Route path='/testimoni' element={<Testimoni setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} isLoggedIn={isLoggedIn}/>}/>
      </Routes>
    </div>
  );
};

export default App;