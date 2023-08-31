import React, { useState } from 'react';
import Colors from './Colors';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ setIsLoggedIn, setUserData, userData, act1, act2 }) => {
    const navigate = useNavigate()

    const [clicked, setClicked] = useState(true)
    const handleLogout = (e) => {
        e.preventDefault()
        if (confirm('apakah anda yakin ingin logout?')) {
            setUserData([])
            setIsLoggedIn(false)
            navigate('/')
        }
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100" style={{
            width: '15%',
            borderRight: `1px solid $`
        }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src="https://sman1bwi.sch.id/wp-content/uploads/2020/07/cropped-Logo_SMAN_1_Banyuwangi-removebg-preview-1.png" alt="" width={35} className='me-2' />
                <span>SMANSA SOT</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to='/dashboard' className={`nav-link ${act1} mb-1 text-white`} aria-current="page">
                        <i className="fa-solid fa-expand me-2"></i>
                        Overview
                    </Link>
                    <Link to='/edit' className={`nav-link ${act2} mb-1 text-white`} aria-current="page">
                        <i className="fa-regular fa-pen-to-square me-2"></i>
                        Edit Data
                    </Link>
                    <Link to='/' className="nav-link text-white mb-1" aria-current="page">
                        <i className="fa-solid fa-circle-arrow-left me-2"></i>
                        Back to Home
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <Link to='/dashboard' className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={`https://apismanta.cyclic.cloud/${userData[0].details[0].img}`} alt="" width={30} className='rounded-circle me-2' height={30} />
                    <strong className='text-capitalize'>{userData[0].nama}</strong>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#" onClick={(e) => handleLogout(e)}>Sign out</a></li>
                </ul>
            </div>
        </div>

    );
};

export default Sidebar;