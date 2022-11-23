import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import logo from '../Images/logo.png'
import {BiBookmarkHeart} from 'react-icons/bi'  

function Navbar() {
  return (
    <>
        <section className="navbar fixed-top">
            <div className="container">
                <div className="row justify-content-between" >
                    <div className="col-lg-3">
                        <img src={logo} alt="Comp Logo" className="nav-logo" />
                        <Link to='/' className='logo-link'>Musk Estate</Link>
                    </div>
                    <div className="col-lg-7">
                        <nav className="nav-links">
                            <ul className="navbar-nav ms-auto mb-2  links">
                                <li className="nav-item"><Link to='/1bhk'>OneBHK</Link></li>
                                <li className="nav-item"><Link to='/2bhk'>TwoBHK</Link></li>
                                <li className="nav-item"><Link to='/3bhk'>ThreeBHK</Link></li>
                                <li className="nav-item"><Link to='/villa'>Villa</Link></li>
                                <li className="nav-item"><Link to='/'>Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-end">
                    <Link to='' className='nav-wish'>Wish</Link>
                    </div>
                </div>
            </div>
        </section>
        
    
    </>

    )
}

export default Navbar