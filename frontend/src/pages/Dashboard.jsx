import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ setIsLoggedIn, setUserData, userData }) => {
    const data = userData[0]

    return (
        <div className='w-100 d-flex justify-content-between align-items-center bg-dark text-white' style={{
            // backgroundColor: `rgba(229, 230, 228, 0.5)`
        }}>
            <Sidebar setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} act1={'active'}/>
            <div className='w-100 container vh-100 py-3 d-flex justify-content-center align-items-center flex-column' style={{
                width: '85%',
                maxHeight: '100vh',
                overflowX: 'auto'
            }}>
                <h1 className='text-capitalize mb-4'>Overview</h1>

                <table className="table w-50 table-hover table-striped table-dark table-group-divider">
                    <tbody>
                        <tr>
                            <td>NISN</td>
                            <td>:</td>
                            <td>{data.nisn}</td>
                        </tr>
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data.nama}</td>
                        </tr>
                        <tr>
                            <td>Tempat Tanggal Lahir</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].ttl}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].alamat}</td>
                        </tr>
                        <tr>
                            <td>Nomor Telp.</td>
                            <td>:</td>
                            <td>{data['details'][0].noTelp}</td>
                        </tr>
                        <tr>
                            <td>Tahun Masuk</td>
                            <td>:</td>
                            <td>{data['details'][0].tahunMasuk}</td>
                        </tr>
                        <tr>
                            <td>Tahun Lulus</td>
                            <td>:</td>
                            <td>{data.tahunLulus}</td>
                        </tr>
                        <tr>
                            <td>No. Ijazah</td>
                            <td>:</td>
                            <td>{data.noIjazah}</td>
                        </tr>
                        <tr>
                            <td>No. SKHUN</td>
                            <td>:</td>
                            <td>{data.noSkhun}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].status}</td>
                        </tr>
                        <tr>
                            <td>Detail status</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].detailStatus}</td>
                        </tr>
                        <tr>
                            <td>Nama Ayah</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].namaAyah}</td>
                        </tr>
                        <tr>
                            <td>Pekerjaan Ayah</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].pekerjaanAyah}</td>
                        </tr>
                        <tr>
                            <td>Nama Ibu</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].namaIbu}</td>
                        </tr>
                        <tr>
                            <td>Pekerjaan Ibu</td>
                            <td>:</td>
                            <td className='text-capitalize'>{data['details'][0].pekerjaanIbu}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;