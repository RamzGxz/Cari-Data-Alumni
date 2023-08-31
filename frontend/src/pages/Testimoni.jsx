import React from 'react';
import Navigations from '../components/Navigations';

const Testimoni = ({setIsLoggedIn, setUserData, userData, isLoggedIn}) => {
    return (
        <div>
            <Navigations isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>

            <h1 className='mt-5 pt-4 text-center'>Testimoni</h1>
        </div>
    );
};

export default Testimoni;