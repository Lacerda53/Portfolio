import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
    return (
        <div id="contact" className="uk-container uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-section">
            <div className="uk-text-xlarge uk-text-center uk-text-bold">
                Contato</div>

            <div className="uk-margin-large-top">
                <h5 className="uk-margin-remove">
                    <span className="uk-margin-small-top uk-text-muted uk-margin-small-right" uk-icon="icon: mail;ratio: 1.3"></span>
                    <a className="uk-text-green" target="_blank" href="mailto:guilhermeandrade2013@gmail.com">guilhermeandrade2013@gmail.com</a>
                </h5>
                <h5 className="uk-margin-remove">
                    <span className="uk-margin-small-top uk-text-muted uk-margin-small-right" uk-icon="icon: whatsapp;ratio: 1.3"></span>
                    <a className="uk-text-green" target="_blank" href="https://api.whatsapp.com/send?phone=5594992643424">+55 (94) 99264-3424</a>
                </h5>
                <h5 className="uk-margin-remove">
                    <span className="uk-margin-small-top uk-text-muted uk-margin-small-right" uk-icon="icon: location;ratio: 1.3"></span>
                    <a className="uk-text-green" target="_blank" href="https://www.google.com/maps/place/UNITPAC/@-7.2097874,-48.2374062,15z/data=!4m8!1m2!3m1!2sUNITPAC!3m4!1s0x92d90d319d34dd2f:0x44885ea2f33806a!8m2!3d-7.2097886!4d-48.2374048">Av. Filadélfia, 568 - St. Oeste, Araguaína - TO, 77816-540</a>
                </h5>
                <p uk-parallax="viewport: 0.3;opacity: 0,8;" className="uk-text-center uk-text-left@s">
                    <a href="https://www.linkedin.com/in/lacerda53/" target="_blank" className="uk-icon-button uk-margin-small-right uk-icon" uk-icon="icon: linkedin" title="linkedin" ></a>
                    <a href="https://github.com/lacerda53" target="_blank" className="uk-icon-button uk-margin-small-right uk-icon" uk-icon="icon: github" title="github"></a>
                    <a href="https://lacerda53.medium.com/" target="_blank" className="uk-icon-button uk-margin-small-right uk-icon" uk-icon="icon: quote-right" title="medium"></a>
                    <a href="https://www.facebook.com/lacerda53" target="_blank" className="uk-icon-button uk-margin-small-right uk-icon" uk-icon="icon: facebook" title="facebook"></a>
                    <a href="http://instagram.com/guilherme_andrade2" target="_blank" className="uk-icon-button uk-margin-small-right uk-icon" uk-icon="icon: instagram" title="instagram"></a>
                </p>
            </div>
        </div>
    );
}

export default Contact;