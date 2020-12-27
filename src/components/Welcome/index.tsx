import React from 'react';
import image from '../../assets/main.png';

const Welcome: React.FC = () => {
    return (
        <div id="home" className="uk-container">
            <div className="uk-flex uk-flex-around uk-grid" uk-grid="">
                <div className="uk-flex uk-flex-center uk-flex-middle uk-width-1-2 uk-width-1-2@s uk-flex-last@m">
                    <div uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true">
                        <img data-src={image} src={image}></img>
                    </div>
                </div>
                <div className="uk-text-left uk-margin-large-top">
                    <div className="uk-text-bold uk-text-lead uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                        <div className="uk-text-white">
                            Olá,
                        </div>
                    </div>
                    <div className="uk-text-bold uk-text-lead uk-text-primary uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                        <a className="content01" href="#about">
                            {/* hover */}
                        </a>
                    </div>
                    <div className="uk-text-bold uk-text-lead uk-text-primary uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                        <a className="content02" href="#portfolio">
                            {/* hover */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;