import React from 'react';
import Navigations from '../components/Navigations';
import { useMediaQuery } from 'react-responsive';

const BursaKerja = ({isLoggedIn, userData, setUserData, setIsLoggedIn}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return (
        <div>
            <Navigations act2={'active'} isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
            <div className='w-100 container d-flex justify-content-center align-items-center flex-column' style={{
                marginTop: isMobile ? '15%' : '8%'
            }} data-aos='zoom-in' data-aos-duration='500'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className={`bg-black ${isMobile ? 'w-25': 'w-75'}`} style={{
                        height: '1px',
                    }}></div>
                    <div className={`${isMobile ? 'w-50': 'w-75'} d-flex justify-content-center`}>
                        {isMobile ? (
                            <h4 className=''>Bursa Kerja</h4>
                        ): (
                            <h1>Bursa Kerja</h1>
                        )}
                    </div>
                    <div className={`bg-black ${isMobile ? 'w-25': 'w-75'}`} style={{
                        height: '1px',
                    }}></div>
                </div>

                <div className='w-100'>
                    <p>Tidak ada info bulan ini!</p>
                </div>
            </div>
        </div>
    );
};

export default BursaKerja;