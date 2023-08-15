import React from 'react';
import Colors from '../components/Colors';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='' style={{
            backgroundColor: Colors.grey,
            fontFamily: "'Poppins', sans-serif"
        }}>
            <div className='w-100 vh-100 d-flex justify-content-between align-items-center'>
                <div className='w-50 d-flex justify-content-center h-100 px-5 flex-column' style={{
                    background: `linear-gradient(rgba(3, 43, 67, 0.5), rgba(3, 43, 67, 0.5)),url('https://sman1bwi.sch.id/wp-content/themes/highlight/assets/images/hero-2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <h1 className='fst-italic text-white fw-medium' data-aos='fade-left' data-aos-duration='2000'>"Orang-orang yang berhenti belajar akan menjadi pemilik masa lalu. Orang-orang yang masih terus belajar, akan menjadi pemilik masa depan."</h1>
                    <h5 className='text-white' data-aos='fade-up' data-aos-duration='2000'>- Mario Teguh</h5>
                </div>
                <div className='w-50 d-flex align-items-center py-5 container h-100 flex-column' data-aos='fade-down' data-aos-duration='1000'>
                    <h1 className='fw-bold'>Sistem Informasi Alumni</h1>
                    <p className='text-black-50 text-center'>Silakan Masukan Informasi Pengguna di bawah ini. Setelah berhasil mendaftar silakan login dan lengkapi data Anda melalui menu Profil</p>
                    <form action="" className='w-100 container mt-4 d-flex justify-content-center flex-column'>
                        <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                            <input type="text" className='w-100 bg-transparent iLog' placeholder='Nama Awal' style={{
                                border: 'none'
                            }} />
                        </div>
                        <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                            <input type="text" className='w-100 bg-transparent iLog' placeholder='Nama Akhir' style={{
                                border: 'none'
                            }} />
                        </div>
                        <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                            <input type="email" className='w-100 bg-transparent iLog' placeholder='Email' style={{
                                border: 'none'
                            }} />
                        </div>
                        <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                            <input type="password" className='w-100 bg-transparent iLog' placeholder='Password' style={{
                                border: 'none'
                            }} />
                        </div>
                        <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                            <input type="password" className='w-100 bg-transparent iLog' placeholder='Konfirmasi Password' style={{
                                border: 'none'
                            }} />
                        </div>
                        <button type='sumbit' className='btn btn-lg mt-3 text-white' style={{
                            backgroundColor: Colors.darkBlue
                        }}>REGISTER</button>
                        <p className='mb-0 mt-3'>Sudah punya akun? silahkan login <Link to={'/login'}>disini!</Link></p>
                    </form>

                    <Link style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10
                    }} className='btn btn-dark' to={'/'}>Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;