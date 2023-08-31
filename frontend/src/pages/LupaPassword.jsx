import React, { useState } from 'react';
import Colors from '../components/Colors';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive'

const LupaPassword = () => {
    const [viewEmail, setViewEmail] = useState(true)
    const [viewPassChanged, setViewPassChanged] = useState(false)
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (viewEmail) {
                const postDataResponse = await axios.post('https://apismanta.cyclic.cloud/findEmail', {
                    email: email
                });
                if (postDataResponse.data === 'berhasil') {
                    alert('email found!!')
                    setViewEmail(false)
                    setViewPassChanged(true)
                } else {
                    alert('email not found!')
                    setViewPassChanged(false)
                    setViewEmail(true)
                }
            }
            if (!viewEmail && viewPassChanged) {
                if (confirmPass === pass) {
                    const putData = {
                        password: pass
                    };
                    const putResponse = await axios.put(`http://localhost:5656/putPass/${email}`, putData);
                    if (putResponse.status === 200) {
                        alert('Success! you will redirect to login page!')
                        navigate('/login')
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className='' style={{
                backgroundColor: Colors.grey,
                fontFamily: "'Poppins', sans-serif"
            }}>
                <div className={`w-100 vh-100 d-flex justify-content-between align-items-center ${isMobile ? 'flex-column-reverse' : ''}`}>
                    <div className={`${isMobile ? 'w-100' : 'w-50'} d-flex justify-content-center h-100 px-5 flex-column`} style={{
                        background: `linear-gradient(rgba(3, 43, 67, 0.5), rgba(3, 43, 67, 0.5)),url('https://sman1bwi.sch.id/wp-content/themes/highlight/assets/images/hero-1.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        {isMobile ? (
                            <div data-aos='fade-left' data-aos-duration='2000' className='w-100 justify-content-center flex-column d-flex'>
                                <p className='fst-italic text-white fw-medium'>"Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia."</p>
                                <p className='text-white'>- Nelson Mandela</p>
                            </div>
                        ) : (
                            <div>
                                <h1 className='fst-italic text-white fw-medium' data-aos='fade-left' data-aos-duration='2000'>"Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia."</h1>
                                <h5 className='text-white' data-aos='fade-up' data-aos-duration='2000'>- Nelson Mandela</h5>
                            </div>
                        )}
                    </div>
                    <div className={`${isMobile ? 'w-100' : 'w-50'} d-flex align-items-center py-5 container h-100 flex-column`} data-aos='fade-down' data-aos-duration='1000'>
                        <h1 className='fw-bold'>Sistem Informasi Alumni</h1>
                        <p className='text-black-50 text-center'>Silakan masukkan Email anda, agar kami dapat memunculkan form untuk mereset Kata Sandi Anda.</p>
                        <form action="" className='w-100 container mt-4 d-flex justify-content-center flex-column' onSubmit={(e) => handleSubmit(e)}>
                            <div className={`form-control form-control-lg bg-transparent border-1 border-black mb-3 align-items-center ${viewEmail ? 'd-flex' : 'd-none'}`}>
                                <i className="fa-solid fa-envelope me-3 fs-5"></i>
                                <input type="email" className='w-100 bg-transparent iLog' placeholder='Email' style={{
                                    border: 'none'
                                }} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className={`w-100 ${viewPassChanged ? 'd-blobk' : 'd-none'}`}>
                                <div className={`form-control form-control-lg bg-transparent border-1 border-black mb-3 align-items-center d-flex`}>
                                    <i className="fa-solid fa-envelope me-3 fs-5"></i>
                                    <input type="password" className='w-100 bg-transparent iLog' placeholder='New Password' style={{
                                        border: 'none'
                                    }} onChange={(e) => { setPass(e.target.value) }} />
                                </div>
                                <div className={`form-control form-control-lg bg-transparent border-1 border-black mb-3 align-items-center d-flex`}>
                                    <i className="fa-solid fa-envelope me-3 fs-5"></i>
                                    <input type="password" className='w-100 bg-transparent iLog' placeholder='Konfirmasi Password' style={{
                                        border: 'none'
                                    }} onChange={(e) => setConfirmPass(e.target.value)} />
                                </div>
                            </div>
                            <button type='sumbit' className='btn btn-success btn-lg mt-3'>SEND</button>
                            <p className='mb-0 mt-3'>sudah mengirim? silahkan login <Link to={'/login'}>disini!</Link></p>
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