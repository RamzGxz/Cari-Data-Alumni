import React from 'react';
import Colors from '../components/Colors';

const Login = () => {
    return (
        <div className='' style={{
            backgroundColor: Colors.grey,
            fontFamily: "'Poppins', sans-serif"
        }}>
            <div className='w-100 vh-100 d-flex justify-content-between align-items-center'>
                <div className='w-50 d-flex justify-content-center h-100 px-5 flex-column' style={{
                    background: `linear-gradient(rgba(3, 43, 67, 0.5), rgba(3, 43, 67, 0.5)),url('https://sman1bwi.sch.id/wp-content/themes/highlight/assets/images/hero-4.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <h1 className='fst-italic text-white fw-medium' data-aos='fade-left' data-aos-duration='2000'>"Jangan hanya belajar, carilah pengalaman. Jangan hanya membaca, seraplah. Jangan hanya berpikir, renungkan. Jangan hanya bermimpi, lakukan."</h1>
                    <h5 className='text-white'>- Roy T. Bennett</h5>
                </div>
                <div className='w-50 d-flex justify-content-center align-items-center py-5 container h-100 flex-column'>
                    <h1 className='fw-bold'>Sistem Informasi Alumni</h1>
                    <p className='text-black-50 text-center'>Silakan login dengan email dan password anda. Bila belum punya user silakan daftar melalui link Daftar di bawah</p>

                    <form action="" className='w-100 container mt-4'>
                        <div className='form-control form-control-lg bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                            <i className="fa-solid fa-envelope me-3 fs-5"></i>
                            <input type="email" className='w-100 bg-transparent ' placeholder='Email' style={{
                                border: 'none'
                            }} />
                        </div>
                        <div className='form-control form-control-lg bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                            <i className="fa-solid fa-key me-3 fs-5"></i>
                            <input type="password" className='w-100 bg-transparent ' placeholder='Password' style={{
                                border: 'none'
                            }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;