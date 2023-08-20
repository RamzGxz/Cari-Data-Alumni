import React from 'react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios'

const Edit = ({ setIsLoggedIn, setUserData, userData }) => {
    const data = userData[0]

    // state data
    const [nisn, setNisn] = useState(data.nisn)
    const [nama, setNama] = useState(data.nama)
    const [ttl, setTtl] = useState(data['details'][0].ttl)
    const [alamat, setAlamat] = useState(data['details'][0].alamat)
    const [noTelp, setNoTelp] = useState(data['details'][0].noTelp)
    const [tahunMasuk, setTahunMasuk] = useState(data['details'][0].tahunMasuk)
    const [tahunLulus, setTahunLulus] = useState(data.tahunLulus)
    const [noIjazah, setNoIjazah] = useState(data.noIjazah)
    const [noSkhun, setNoSkhun] = useState(data.noSkhun)
    const [status, setStatus] = useState(data['details'][0].status)
    const [detailStatus, setDetailStatus] = useState(data['details'][0].detailStatus)
    const [namaAyah, setNamaAyah] = useState(data['details'][0].namaAyah)
    const [pekerjaanAyah, setPekerjaanAyah] = useState(data['details'][0].pekerjaanAyah)
    const [namaIbu, setNamaIbu] = useState(data['details'][0].namaIbu)
    const [pekerjaanIbu, setPekerjaanIbu] = useState(data['details'][0].pekerjaanIbu)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataUpdated = {
            nama: nama,
            nisn: nisn,
            noIjazah: noIjazah,
            noSkhun: noSkhun,
            tahunLulus: tahunLulus,
            ttl: ttl,
            alamat: alamat,
            noTelp: noTelp,
            tahunMasuk: tahunMasuk,
            status: status,
            detailStatus: detailStatus,
            namaAyah: namaAyah,
            pekerjaanAyah: pekerjaanAyah,
            namaIbu: namaIbu,
            pekerjaanIbu: pekerjaanIbu
        }

        try {
            const res = await axios.put(`http://localhost:5656/editData/${data._id}`, dataUpdated)
            console.log(res)
            if(res.data.message === 'berhasil') {
                alert('data has been edited!')
                setUserData(res.data.data)
            } else {
                alert('data not edited!')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-100 d-flex justify-content-between align-items-center bg-dark text-white'>
            <Sidebar setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} act2={'active'} />
            <div className='w-100 container vh-100 py-3 d-flex align-items-center flex-column ' style={{
                width: '85%',
                maxHeight: '100vh',
                overflowX: 'auto'
            }}>
                <h3 className='text-capitalize mb-3'>Edit Data</h3>

                <form action="" className='w-50' onSubmit={(e)=> handleSubmit(e)}>
                    <table className="table w-100 table-hover table-striped table-dark table-sm">
                        <tbody>
                            <tr>
                                <td>NISN</td>
                                <td>:</td>
                                <td>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={nisn} onChange={e => setNisn(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Nama</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={nama} onChange={e => setNama(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Tempat Tanggal Lahir</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={ttl} onChange={e => setTtl(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={alamat} onChange={e => setAlamat(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Nomor Telp.</td>
                                <td>:</td>
                                <td>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={noTelp} onChange={e => setNoTelp(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Tahun Masuk</td>
                                <td>:</td>
                                <td>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={tahunMasuk} onChange={e => setTahunMasuk(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Tahun Lulus</td>
                                <td>:</td>
                                <td>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={tahunLulus} onChange={e => setTahunLulus(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>No. Ijazah</td>
                                <td>:</td>
                                <td>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={noIjazah} onChange={e => setNoIjazah(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>No. SKHUN</td>
                                <td>:</td>
                                <td>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={noSkhun} onChange={e => setNoSkhun(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={status} onChange={e => setStatus(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Detail status</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={detailStatus} onChange={e => setDetailStatus(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Nama Ayah</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={namaAyah} onChange={e => setNamaAyah(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Pekerjaan Ayah</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={pekerjaanAyah} onChange={e => setPekerjaanAyah(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Nama Ibu</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={namaIbu} onChange={e => setNamaIbu(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Pekerjaan Ibu</td>
                                <td>:</td>
                                <td className='text-capitalize'>
                                    <input type="text" className='form-control form-control-sm form-control-plaintext text-white bg-transparent px-1' value={pekerjaanIbu} onChange={e => setPekerjaanIbu(e.target.value)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <button className='btn btn-success w-50' type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;