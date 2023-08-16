import React, { useState } from 'react';
import Navigations from '../components/Navigations';
import Colors from '../components/Colors';

const DataAlumni = () => {
    const [data, setData] = useState([])
    
    return (
        <div>
            <Navigations act1={'active'}/>
            <div className='w-100 container d-flex justify-content-center align-items-center flex-column' style={{
                marginTop: '8%'
            }} data-aos='zoom-in' data-aos-duration='500'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='bg-black w-75' style={{
                        height: '1px',
                    }}></div>
                    <div className='w-75 d-flex justify-content-center'>
                        <h1>Pencarian Data Alumni</h1>
                    </div>
                    <div className='bg-black w-75' style={{
                        height: '1px',
                    }}></div>
                </div>

                <form action="" className='w-100 mt-5 d-flex justify-content-center flex-column align-items-center'>
                    <input type="text" className='w-100 form-control-plaintext form-control px-2 '  placeholder='Cari data berdasarkan nisn, nama, tahun lulus, jenis kelamin, nomor ijazah, nomor SKHUN' style={{
                        borderBottom: '1px solid black'
                    }}/>
                    <button type='submit' className='btn w-25 mt-5 fw-bold fs-5' style={{
                        backgroundColor: Colors.green,
                        color: 'white'
                    }}>CARI</button>
                </form>
            </div>
        </div>
    );
};

export default DataAlumni;