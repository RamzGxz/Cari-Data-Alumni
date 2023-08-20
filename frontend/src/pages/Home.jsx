import React from 'react';
import Navigations from '../components/Navigations';
import { Link } from 'react-router-dom';

const Home = ({isLoggedIn, userData, setUserData, setIsLoggedIn}) => {
    return (
        <div>
            <Navigations isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
            <div className='w-100 vh-100 d-flex justify-content-center align-items-center text-white flex-column' style={{
                fontFamily: "'Poppins', sans-serif",
                background: `linear-gradient(rgba(3, 43, 67, 0.6), rgba(3, 43, 67, 0.6)),url('https://sman1bwi.sch.id/wp-content/themes/highlight/assets/images/hero-2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h1 className='fw-bold' data-aos='fade-down' data-aos-duration='2000'>SISTEM INFORMASI ALUMNI</h1>
                <h1 className='fw-bold' data-aos='fade-down' data-aos-duration='2000'>SMAN 1 BANYUWANGI</h1>
                <div className='d-flex justify-content-between align-items-center mt-3' data-aos='fade-up' data-aos-duration='2000'>
                    <Link to={'/testimoni'} className='btn btn-light fw-bold'>TESTIMONI</Link>
                    <Link to={'/register'} className='btn btn-danger fw-bold mx-2'>DAFTAR</Link>
                    <Link to={'/login'} className='btn btn-success fw-bold'>LOGIN</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;