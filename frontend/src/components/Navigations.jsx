import React from 'react';
import Colors from './Colors';
import { Link } from 'react-router-dom';

const Navigations = ({act1, act2, act3}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Fifth navbar example" style={{
                backgroundColor: Colors.darkBlue
            }}>
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>SMANSA SOT</Link>
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
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link className="btn btn-outline-light" to={'/login'}>Login</Link>
                            <Link className="btn btn-outline-light" to={'/register'}>Register</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigations;