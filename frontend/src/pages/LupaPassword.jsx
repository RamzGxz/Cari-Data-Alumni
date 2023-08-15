import React from 'react';
import Colors from '../components/Colors';
import { Link } from 'react-router-dom';
const LupaPassword = () => {
    return (
        <div>
            <div className='' style={{
                backgroundColor: Colors.grey,
                fontFamily: "'Poppins', sans-serif"
            }}>
                <div className='w-100 vh-100 d-flex justify-content-between align-items-center'>
                    <div className='w-50 d-flex justify-content-center h-100 px-5 flex-column' style={{
                        background: `linear-gradient(rgba(3, 43, 67, 0.5), rgba(3, 43, 67, 0.5)),url('https://sman1bwi.sch.id/wp-content/themes/highlight/assets/images/hero-1.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <h1 className='fst-italic text-white fw-medium' data-aos='fade-left' data-aos-duration='2000'>"Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia."</h1>
                        <h5 className='text-white' data-aos='fade-up' data-aos-duration='2000'>- Nelson Mandela</h5>
                    </div>
                    <div className='w-50 d-flex align-items-center py-5 container h-100 flex-column' data-aos='fade-down' data-aos-duration='1000'>
                        <h1 className='fw-bold'>Sistem Informasi Alumni</h1>
                        <p className='text-black-50 text-center'>Silakan masukkan Email anda, agar kami dapat memunculkan form untuk mereset Kata Sandi Anda.</p>
                        <form action="" className='w-100 container mt-4 d-flex justify-content-center flex-column'>
                            <div className='form-control form-control-lg bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                                <i className="fa-solid fa-envelope me-3 fs-5"></i>
                                <input type="email" className='w-100 bg-transparent iLog' placeholder='Email' style={{
                                    border: 'none'
                                }} />
                            </div>
                            <button type='sumbit' className='btn btn-success btn-lg mt-3'>SEND</button>
                            <p className='mb-0 mt-3'>sudah mengirim? silahkan login <Link to={'/register'}>disini!</Link></p>
                        </form>

                        <Link style={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10
                        }} className='btn btn-dark' to={'/'}>Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LupaPassword;