import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
    return (
        <div className="uk-container uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-section">
            <div className="uk-text-xlarge uk-text-center uk-text-bold">
                Contato</div>

            <div className="uk-margin-top">
                <h4 className="uk-margin-remove">
                    <span className="uk-margin-small-top uk-margin-small-right" uk-icon="icon: mail;ratio: 1.5"></span>
                    <a className="uk-text-green" target="_blank" href="mailto:guilhermeandrade2013@gmail.com">guilhermeandrade2013@gmail.com</a>
                </h4>
                <h4 className="uk-margin-remove">
                    <span className="uk-margin-small-top uk-margin-small-right" uk-icon="icon: receiver;ratio: 1.5"></span>
                    <a className="uk-text-green" target="_blank" href="https://api.whatsapp.com/send?phone=5594992643424">+55 (94) 99264-3424</a>
                </h4>
                <h4 className="uk-margin-remove">
                    <span className="uk-margin-small-top uk-margin-small-right" uk-icon="icon: location;ratio: 1.5"></span>
                    <a className="uk-text-green" target="_blank" href="https://www.google.com.br/maps/@-4.4420779,-49.1120323,15z?hl=pt-br">Araguaína - TO</a>
                </h4>
            </div>
        </div>
    );
}

export default Contact;