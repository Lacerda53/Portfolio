import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar: React.FC = () => {
    return (
        <header>
            <div className="uk-container" style={{ backgroundColor: '#090909' }} uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav className="uk-navbar uk-navbar">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item uk-logo">
                            lacerda53
                    </div>
                    </div>

                    <div className="uk-navbar-right">
                        <button className="uk-icon-button uk-hidden@m uk-icon" uk-icon="menu" uk-toggle="target: #side-menu"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="menu"><rect x="2" y="4" width="16" height="1"></rect><rect x="2" y="9" width="16" height="1"></rect><rect x="2" y="14" width="16" height="1"></rect></svg></button>
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li ><Link activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}>Início</Link></li>
                            <li ><Link activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}>Sobre</Link></li>
                            <li ><Link activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                duration={500}>Portfólio</Link></li>
                            <li ><Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}>Contato</Link></li>
                        </ul>
                    </div>
                </nav>
                <div id="side-menu" className="uk-offcanvas" uk-offcanvas="flip: true; mode: slide; overlay: true">
                    <div className="uk-offcanvas-bar">
                        <button className="uk-offcanvas-close uk-icon uk-close" type="button" uk-close="">
                        </button>

                        <div className="uk-flex uk-flex-column uk-height-1-1">
                            <div>
                                <br />
                                <br />
                                <ul className="uk-nav">
                                    <li ><a href="#home">Início</a></li>
                                    <li ><a href="#about">Sobre</a></li>
                                    <li ><a href="#portfolio">Portfólio</a></li>
                                    <li ><a href="#contact">Contato</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;