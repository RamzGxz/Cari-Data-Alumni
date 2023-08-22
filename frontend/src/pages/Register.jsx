import React, { useState } from 'react';
import Colors from '../components/Colors';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive'

const Register = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const [namaAwal, setNamaAwal] = useState('')
    const [namaAkhir, setNamaAkhir] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [jenisKelamin, setJenisKelamin] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const navigate = useNavigate()
    const handleReg = async (e) => {
        e.preventDefault()
        const data = {
            namaAwal: namaAwal,
            namaAkhir: namaAkhir,
            email: email,
            password: pass,
            jenisKelamin: jenisKelamin
        }
        if (pass === confirmPass) {
            try {
                await axios.post('https://apismanta.cyclic.cloud/postData', data)
                alert('reg berhasil!')
                navigate('/login')
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('password tidak sama!')
        }
    }

    console.log(jenisKelamin)

    return (
        <div className='' style={{
            backgroundColor: Colors.grey,
            fontFamily: "'Poppins', sans-serif"
        }}>
            <div className={`w-100 vh-100 d-flex justify-content-between align-items-center ${isMobile ? 'flex-column-reverse' : ''}`}>
                <div className={`${isMobile ? 'w-100' : 'w-50'} d-flex justify-content-center h-100 px-5 flex-column`} style={{
                    background: `linear-gradient(rgba(3, 43, 67, 0.5), rgba(3, 43, 67, 0.5)),url('https://sman1bwi.sch.id/wp-content/themes/highlight/assets/images/hero-2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    {isMobile ? (
                        <div data-aos='fade-left' data-aos-duration='2000' className='w-100 justify-content-center flex-column d-flex'>
                            <p className='fst-italic text-white fw-medium mb-0' >"Orang-orang yang berhenti belajar akan menjadi pemilik masa lalu. Orang-orang yang masih terus belajar, akan menjadi pemilik masa depan."</p>
                            <p className='text-white mb-0'>- Mario Teguh</p>
                        </div>
                    ) : (
                        <div>
                            <h1 className='fst-italic text-white fw-medium' data-aos='fade-left' data-aos-duration='2000'>"Orang-orang yang berhenti belajar akan menjadi pemilik masa lalu. Orang-orang yang masih terus belajar, akan menjadi pemilik masa depan."</h1>
                            <h5 className='text-white' data-aos='fade-up' data-aos-duration='2000'>- Mario Teguh</h5>
                        </div>
                    )}
                </div>
                <div className={`${isMobile ? 'w-100' : 'w-50'} d-flex align-items-center py-5 container h-100 flex-column`} data-aos='fade-down' data-aos-duration='1000'>
                    <h1 className='fw-bold'>Sistem Informasi Alumni</h1>
                    <p className='text-black-50 text-center'>Silakan Masukan Informasi Pengguna di bawah ini. Setelah berhasil mendaftar silakan login dan lengkapi data Anda melalui menu dashboard</p>
                    <form action="" className={`w-100 container ${isMobile? 'mt-2': 'mt-4'} d-flex justify-content-center flex-column`} onSubmit={(e) => handleReg(e)}>
                        {isMobile ? (
                            <div>
                                <div className='form-control form-control-sm bg-transparent border-1 border-black mb-1 d-flex align-items-center'>
                                    <input type="text" className='w-100 bg-transparent iLog' placeholder='Nama Awal' style={{
                                        border: 'none'
                                    }} onChange={(e) => setNamaAwal(e.target.value)} />
                                </div>
                                <div className='form-control form-control-sm bg-transparent border-1 border-black mb-1 d-flex align-items-center'>
                                    <input type="text" className='w-100 bg-transparent iLog' placeholder='Nama Akhir' style={{
                                        border: 'none'
                                    }} onChange={(e) => setNamaAkhir(e.target.value)} />
                                </div>
                                <div className='form-control form-control-sm bg-transparent border-1 border-black mb-1 d-flex align-items-center'>
                                    <select className='w-100 bg-transparent iLog text-black-50' placeholder='Jenis Kelamin' style={{
                                        border: 0
                                    }} onChange={(e) => setJenisKelamin(e.target.value)}>
                                        <option value={''}>Jenis Kelamin</option>
                                        <option value={'laki-laki'}>Laki-laki</option>
                                        <option value={'perempuan'}>Perempuan</option>
                                    </select>
                                </div>
                                <div className='form-control form-control-sm bg-transparent border-1 border-black mb-1 d-flex align-items-center'>
                                    <input type="email" className='w-100 bg-transparent iLog' placeholder='Email' style={{
                                        border: 'none'
                                    }} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-control form-control-sm bg-transparent border-1 border-black mb-1 d-flex align-items-center'>
                                    <input type="password" className='w-100 bg-transparent iLog' placeholder='Password' style={{
                                        border: 'none'
                                    }} onChange={(e) => setPass(e.target.value)} />
                                </div>
                                <div className='form-control form-control-sm bg-transparent border-1 border-black mb-1 d-flex align-items-center'>
                                    <input type="password" className='w-100 bg-transparent iLog' placeholder='Konfirmasi Password' style={{
                                        border: 'none'
                                    }} onChange={(e) => setConfirmPass(e.target.value)} />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                                    <input type="text" className='w-100 bg-transparent iLog' placeholder='Nama Awal' style={{
                                        border: 'none'
                                    }} onChange={(e) => setNamaAwal(e.target.value)} />
                                </div>
                                <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                                    <input type="text" className='w-100 bg-transparent iLog' placeholder='Nama Akhir' style={{
                                        border: 'none'
                                    }} onChange={(e) => setNamaAkhir(e.target.value)} />
                                </div>
                                <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                                    <select className='w-100 bg-transparent iLog text-black-50' placeholder='Jenis Kelamin' style={{
                                        border: 0
                                    }} onChange={(e) => setJenisKelamin(e.target.value)}>
                                        <option value={''}>Jenis Kelamin</option>
                                        <option value={'laki-laki'}>Laki-laki</option>
                                        <option value={'perempuan'}>Perempuan</option>
                                    </select>
                                </div>
                                <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                                    <input type="email" className='w-100 bg-transparent iLog' placeholder='Email' style={{
                                        border: 'none'
                                    }} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                                    <input type="password" className='w-100 bg-transparent iLog' placeholder='Password' style={{
                                        border: 'none'
                                    }} onChange={(e) => setPass(e.target.value)} />
                                </div>
                                <div className='form-control bg-transparent border-1 border-black mb-3 d-flex align-items-center'>
                                    <input type="password" className='w-100 bg-transparent iLog' placeholder='Konfirmasi Password' style={{
                                        border: 'none'
                                    }} onChange={(e) => setConfirmPass(e.target.value)} />
                                </div>
                            </div>
                        )}
                        {isMobile ? (
                            <div className='w-100'>
                                <button type='sumbit' className='btn mt-1 text-white w-100' style={{
                                    backgroundColor: Colors.darkBlue
                                }}>REGISTER</button>
                                <p className='mb-0 mt-2'>Sudah punya akun? silahkan login <Link to={'/login'}>disini!</Link></p>
                            </div>
                        ) : (
                            <div className='w-100'>
                                <button type='sumbit' className='btn btn-lg mt-3 text-white w-100' style={{
                                    backgroundColor: Colors.darkBlue
                                }}>REGISTER</button>
                                <p className='mb-0 mt-3'>Sudah punya akun? silahkan login <Link to={'/login'}>disini!</Link></p>
                            </div>
                        )}

                    </form>

                    {isMobile ? (
                        <Link style={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10
                        }} className='btn btn-dark btn-sm' to={'/'}>Back to home</Link>
                    ) : (
                        <Link style={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10
                        }} className='btn btn-dark' to={'/'}>Back to home</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;