import React, { useEffect, useState } from 'react';
import Navigations from '../components/Navigations';
import Colors from '../components/Colors';
import axios from 'axios'

const DataAlumni = ({isLoggedIn, userData, setUserData, setIsLoggedIn}) => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [viewData, setViewData] = useState(false)
    const [viewDetails, setViewDetails] = useState(false)

    // state untuk table details
    const [nisn, setNisn] = useState('')
    const [nama, setNama] = useState('')
    const [ttl, setTtl] = useState('')
    const [alamat, setAlamat] = useState('')
    const [noTelp, setNoTelp] = useState('')
    const [tahunMasuk, setTahunMasuk] = useState('')
    const [tahunLulus, setTahunLulus] = useState('')
    const [noIjazah, setNoIjazah] = useState('')
    const [noSkhun, setNoSkhun] = useState('')
    const [status, setStatus] = useState('')
    const [detailStatus, setDetailStatus] = useState('')
    const [namaAyah, setNamaAyah] = useState('')
    const [pekerjaanAyah, setPekerjaanAyah] = useState('')
    const [namaIbu, setNamaIbu] = useState('')
    const [pekerjaanIbu, setPekerjaanIbu] = useState('')

    const handleFindData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get(`http://localhost:5656/findData?query=${query}`)
            setData(res.data)
            setViewData(true)
            console.log(data)
            if (query === '') {
                setViewData(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navigations act1={'active'} isLoggedIn={isLoggedIn} userData={userData} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
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

                <form action="" className='w-100 mt-5 d-flex justify-content-center flex-column align-items-center' onSubmit={(e) => handleFindData(e)}>
                    <input type="text" className='w-100 form-control-plaintext form-control px-2 ' placeholder='Cari data berdasarkan nisn, nama, tahun lulus, jenis kelamin, nomor ijazah, nomor SKHUN' style={{
                        borderBottom: '1px solid black'
                    }} onChange={(e) => { setQuery(e.target.value) }} />
                    <button type='submit' className='btn w-25 mt-5 fw-bold fs-5 fst-italic' style={{
                        backgroundColor: Colors.green,
                        color: 'white'
                    }}>CARI</button>
                </form>

                <div className='w-100 mt-5' style={{
                    maxHeight: '40vh',
                    overflowX: 'auto'
                }}>
                    {viewData ? (
                        <table className="table table-responsive table-hover text-center table-sm">
                            <thead className='table-dark sticky-top'>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">NISN</th>
                                    <th scope="col">Jenis Kelamin</th>
                                    <th scope="col">Tahun Lulus</th>
                                    <th scope="col">No. Ijazah</th>
                                    <th scope="col">No. SKHUN</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, list) => {
                                    return (
                                        <tr key={item._id}>
                                            <th scope="row">{list + 1}</th>
                                            <td className='text-capitalize'>{item.nama}</td>
                                            <td>{item.nisn}</td>
                                            <td className='text-capitalize'>{item.jenisKelamin}</td>
                                            <td>{item.tahunLulus}</td>
                                            <td>{item.noIjazah}</td>
                                            <td>{item.noSkhun}</td>
                                            <td>
                                                <button className='btn btn-sm btn-outline-dark' onClick={() => {
                                                    setViewDetails(true)
                                                    setNisn(item.nisn)
                                                    setNama(item.nama)
                                                    setTtl(item.ttl)
                                                    setAlamat(item.alamat)
                                                    setNoTelp(item.noTelp)
                                                    setTahunMasuk(item.tahunMasuk)
                                                    setTahunLulus(item.tahunLulus)
                                                    setNoIjazah(item.noIjazah)
                                                    setNoSkhun(item.noSkhun)
                                                    setStatus(item.details[0].status)
                                                    setDetailStatus(item.details[0].detailStatus)
                                                    setNamaAyah(item.details[0].namaAyah)
                                                    setPekerjaanAyah(item.details[0].pekerjaanAyah)
                                                    setNamaIbu(item.details[0].namaIbu)
                                                    setPekerjaanIbu(item.details[0].pekerjaanIbu)
                                                    setAlamat(item.details[0].alamat)
                                                    setTtl(item.details[0].ttl)
                                                    setNoTelp(item.details[0].noTelp)
                                                    setTahunMasuk(item.details[0].tahunMasuk)
                                                }}>Lihat Detail</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <h3 className='text-center'>Anda belum mengisi apapun!</h3>
                    )}
                </div>
            </div>

            <div className='w-100 d-flex justify-content-center align-items-center vh-100 position-fixed' style={{
                top: viewDetails ? '50%' : '-50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                backgroundColor: `rgba(0,0,0, 0.7)`,
                transition: 'all ease-in-out .5s'
            }}>
                <div className='py-3 bg-white w-50 container rounded-3 d-flex justify-content-center flex-column align-items-center'>
                    <div className='w-100 justify-content-end d-flex align-items-center'>
                        <button className='btn btn-close' onClick={() => {
                            setViewDetails(false)
                        }}></button>
                    </div>
                    <h3 className='mb-3 text-center'>Biodata Diri</h3>
                    <div className='w-100 mt-3' style={{
                        maxHeight: '60vh',
                        overflowX: 'auto'
                    }}>
                        <table className="table w-100 table-hover table-striped">
                            <tbody>
                                <tr>
                                    <td>NISN</td>
                                    <td>:</td>
                                    <td>{nisn}</td>
                                </tr>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{nama}</td>
                                </tr>
                                <tr>
                                    <td>Tempat Tanggal Lahir</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{ttl}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{alamat}</td>
                                </tr>
                                <tr>
                                    <td>Nomor Telp.</td>
                                    <td>:</td>
                                    <td>{noTelp}</td>
                                </tr>
                                <tr>
                                    <td>Tahun Masuk</td>
                                    <td>:</td>
                                    <td>{tahunMasuk}</td>
                                </tr>
                                <tr>
                                    <td>Tahun Lulus</td>
                                    <td>:</td>
                                    <td>{tahunLulus}</td>
                                </tr>
                                <tr>
                                    <td>No. Ijazah</td>
                                    <td>:</td>
                                    <td>{noIjazah}</td>
                                </tr>
                                <tr>
                                    <td>No. SKHUN</td>
                                    <td>:</td>
                                    <td>{noSkhun}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{status}</td>
                                </tr>
                                <tr>
                                    <td>Detail status</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{detailStatus}</td>
                                </tr>
                                <tr>
                                    <td>Nama Ayah</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{namaAyah}</td>
                                </tr>
                                <tr>
                                    <td>Pekerjaan Ayah</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{pekerjaanAyah}</td>
                                </tr>
                                <tr>
                                    <td>Nama Ibu</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{namaIbu}</td>
                                </tr>
                                <tr>
                                    <td>Pekerjaan Ibu</td>
                                    <td>:</td>
                                    <td className='text-capitalize'>{pekerjaanIbu}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAlumni;