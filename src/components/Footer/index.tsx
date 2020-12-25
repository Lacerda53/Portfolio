import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
    return (
        <div className="uk-flex uk-flex-center uk-text-muted">
            © Copyright {new Date().getFullYear()}. Todos os direitos reservados. by Guilherme Andrade Lacerda
        </div>
    );
}

export default Footer;