import React from 'react';
import Colors from './Colors';
import { Link } from 'react-router-dom';

const Navigations = ({ act1, act2, act3, isLoggedIn, userData, setUserData, setIsLoggedIn }) => {

    const handleLogout = (e) => {
        e.preventDefault()
        if (confirm('apakah anda yakin ingin logout?')) {
            setUserData([])
            setIsLoggedIn(false)
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Fifth navbar example" style={{
                backgroundColor: Colors.darkBlue
            }}>
                <div className="container">
                    <Link className="navbar-brand fw-bolder" to={'/'}>SMANSA SOT</Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarsExample05">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${act1}`} aria-current="page" to={'/data-alumni'}>Data Alumni</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${act2}`} aria-current="page" to={'/bursa-kerja'}>Bursa Kerja</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${act3}`} aria-current="page" to={'/kegiatan'}>Kegiatan</Link>
                            </li>
                        </ul>
                        {isLoggedIn ? (
                            <div className="dropdown">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={`https://apismanta.cyclic.cloud/${userData[0].details[0].img}`} alt="" width={30} className='rounded-circle me-2' height={30}/>
                                    <strong className='text-capitalize'>{userData[0].nama}</strong>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><Link className="dropdown-item" to='/dashboard'>Dashboard</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href='#' onClick={(e) => handleLogout(e)}>Sign out</a></li>
                                </ul>
                            </div>
                        ) : (
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link className="btn btn-outline-light" to={'/login'}>Login</Link>
                                <Link className="btn btn-outline-light" to={'/register'}>Register</Link>
                                {/* <DateModule/> */}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigations;