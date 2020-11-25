import React from 'react';
import image from '../../assets/main.png';

// import { Container } from './styles';

const Welcome: React.FC = () => {
    return (
        <div className="uk-container">
            <div className="uk-flex uk-flex-around uk-grid" uk-grid="">
                <div className="uk-flex uk-flex-center uk-flex-middle uk-width-1-2@m uk-flex-last@m">
                    <div uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true">
                        <img data-src={image} src={image}></img>
                    </div>
                </div>
                <div className="uk-text-left uk-margin-large-top">
                    <a href="">
                        <h1 className="uk-text-bold uk-text-white uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                            Olá,
                        </h1>
                    </a>
                    <a href="">
                        <h1 className="uk-text-bold uk-text-primary uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                            Eu sou
                        </h1>
                    </a>

                    <a href="">
                        <h1 className="uk-text-bold uk-text-primary uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                            Guilherme
                        </h1>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;