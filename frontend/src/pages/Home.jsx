import React from 'react';
import Navigations from '../components/Navigations';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = ({ isLoggedIn, userData, setUserData, setIsLoggedIn }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

    return (
        <div>
            <Navigations
                isLoggedIn={isLoggedIn}
                userData={userData}
                setIsLoggedIn={setIsLoggedIn}
                setUserData={setUserData}
            />
            <div
                className={`w-100 vh-100 d-flex justify-content-center align-items-center text-white flex-column ${isMobile ? 'mobile-background' : isTablet ? 'tablet-background' : 'desktop-background'
                    }`}
                style={{
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                {isMobile ? (
                    <div>
                        <h3 className='fw-bold text-center' data-aos='fade-down' data-aos-duration='2000'>SISTEM INFORMASI ALUMNI</h3>
                        <h3 className='fw-bold text-center' data-aos='fade-down' data-aos-duration='2000'>SMAN 1 BANYUWANGI</h3>
                    </div>
                ) : (
                    <div>
                        <h1 className='fw-bold text-center' data-aos='fade-down' data-aos-duration='2000'>SISTEM INFORMASI ALUMNI</h1>
                        <h1 className='fw-bold text-center' data-aos='fade-down' data-aos-duration='2000'>SMAN 1 BANYUWANGI</h1>
                    </div>
                )}

                {isMobile ? (
                    <div
                        className='d-flex justify-content-between align-items-center mt-3'
                        data-aos='fade-up'
                        data-aos-duration='2000'
                    >
                        <Link to={'/testimoni'} className='btn btn-light fw-bold btn-sm'>
                            TESTIMONI
                        </Link>
                        <Link to={'/register'} className='btn btn-danger fw-bold mx-2 btn-sm'>
                            DAFTAR
                        </Link>
                        <Link to={'/login'} className='btn btn-success fw-bold btn-sm'>
                            LOGIN
                        </Link>
                    </div>
                ) : (
                    <div
                        className='d-flex justify-content-between align-items-center mt-3'
                        data-aos='fade-up'
                        data-aos-duration='2000'
                    >
                        <Link to={'/testimoni'} className='btn btn-light fw-bold'>
                            TESTIMONI
                        </Link>
                        <Link to={'/register'} className='btn btn-danger fw-bold mx-2'>
                            DAFTAR
                        </Link>
                        <Link to={'/login'} className='btn btn-success fw-bold'>
                            LOGIN
                        </Link>
                    </div>
                )}
            </div>
            <style jsx>
                {`
          .mobile-background,
          .tablet-background,
          .desktop-background {
            background: linear-gradient(
                rgba(3, 43, 67, 0.6),
                rgba(3, 43, 67, 0.6)
              ),
              url('https://sman1bwi.sch.id/wp-content/themes/highlight/assets/images/hero-2.jpg');
            background-size: cover;
            background-position: center;
          }

          .tablet-background {
            /* Properti khusus untuk tampilan tablet */
          }

          .desktop-background {
            /* Properti khusus untuk tampilan desktop */
          }
        `}
            </style>
        </div>
    );
};

export default Home;
