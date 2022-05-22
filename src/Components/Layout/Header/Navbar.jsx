import React, {useState} from 'react'
import {slide as Menu} from 'react-burger-menu'
import {Link} from "react-router-dom";
import Logo from '../../../assets/images/LOGO_.svg'
import LogoWhite from '../../../assets/images/LOGO_WHITE.svg'
import LogoWhitePng from '../../../assets/images/LOGO_W.png'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'
import '../../../assets/css/menuContent.css'

const Navbar = () => {

    // const [menu, setMenu] = useState(false)

    const data = {
        facebook: ''
    }

    console.log('we ehere')

    return (
        <header className={`site-header active`}>
            {/*<header className={`site-header ${menu ? "active" : ""}`}>*/}
            <div className="container">
                <div className="header-main">
                    <div className="logo">
                        <Link to="/">
                            <img style={{zIndex:'1'}} alt="logo" src={LogoWhitePng} width="70" height="70"/>
                            {/*<img   alt="logo" />*/}
                        </Link>
                    </div>
                    <a
                        className="responsive-language"
                        href={data.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '12px',
                            color:'lightgray'
                        }}
                    >TR</a>
                    <a
                        className="responsive-language"
                        href={data.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '12px',
                            color:'lightgray'
                        }}
                    >EN</a>
                    <a
                        className="responsive-logo header-fab-icon"
                        href={data.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        // style={{color:'#3458eb'}}
                    >
                        <AiFillFacebook/>
                    </a>
                    <a
                        className="responsive-logo header-fab-icon fab fa-instagram"
                        href={data.facebook}
                        target="_blank"
                        rel="noopener noreferrer">
                            <FaInstagramSquare />
                    </a>
                    <a
                        className="responsive-logo header-fab-icon fa-inverse fab fa-youtube"
                        href={data.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoYoutube/>
                    </a>
                    <div className="menu-wrapper">
                        <Menu className="menu-hamburger" width={'100%'} right={true}>
                            <ul>
                                <li>
                                    <Link to="/#home">Anasayfa</Link>
                                </li>
                                <li key="Blogs">
                                    <Link to={`/#Blogs`}>Etkinlikler</Link>
                                </li>
                                <li key="Photos">
                                    <Link to={`/#Photos`}>Galeri</Link>
                                </li>
                                <li key="Services">
                                    <Link to={`/#Services`}>Guncel</Link>
                                </li>
                                <li key="Contact">
                                    <Link to={`/#Contact`}>Iletisim</Link>
                                </li>
                                <li key="Work">
                                    <Link to={`/info`}>Hakkimizda</Link>
                                </li>
                                <li key="English">
                                    <Link to={`/#Contact`}>English</Link>
                                </li>
                            </ul>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Navbar