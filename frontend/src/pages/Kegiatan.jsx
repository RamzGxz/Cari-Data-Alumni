import React from 'react';
import Navigations from '../components/Navigations';

const Kegiatan = ({isLoggedIn, userData, setUserData, setIsLoggedIn}) => {
    return (
        <div>
            <Navigations act3={'active'} isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
            <div className='w-100 container d-flex justify-content-center align-items-center flex-column' style={{
                marginTop: '8%'
            }} data-aos='zoom-in' data-aos-duration='500'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='bg-black w-75' style={{
                        height: '1px',
                    }}></div>
                    <div className='w-50 d-flex justify-content-center'>
                        <h1>Kegiatan</h1>
                    </div>
                    <div className='bg-black w-75' style={{
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

export default Kegiatan;