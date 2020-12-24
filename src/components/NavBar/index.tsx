import React from 'react';

const NavBar: React.FC = () => {
    return (
        <header>
            <div className="uk-container">
                <nav className="uk-navbar uk-navbar">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item uk-logo">
                            lacerda53
                    </div>
                    </div>

                    <div className="uk-navbar-right">
                        <button className="uk-icon-button uk-hidden@m uk-icon" uk-icon="menu" uk-toggle="target: #side-menu"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="menu"><rect x="2" y="4" width="16" height="1"></rect><rect x="2" y="9" width="16" height="1"></rect><rect x="2" y="14" width="16" height="1"></rect></svg></button>
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li ><a href="/home">Início</a></li>
                            <li ><a href="/about">Sobre</a></li>
                            <li ><a href="/about">Portfólio</a></li>
                            <li ><a href="/about">Contato</a></li>
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
                                    <li ><a href="/home" >Início</a></li>
                                    <li ><a href="/about" >Sobre</a></li>
                                    <li ><a href="/about">Portfólio</a></li>
                                    <li ><a href="/about">Contato</a></li>
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