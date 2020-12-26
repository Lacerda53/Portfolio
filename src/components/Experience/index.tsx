import React from 'react';

const Experience: React.FC = () => {
    return (
        <div className="uk-container uk-section">
            <div className="uk-text-xlarge uk-text-center uk-text-bold">
                Experiência</div>

            {/* <div className=" uk-text-large uk-text-bold uk-text-warning">
                ⚠️Em construção...
                </div> */}

            <div className="uk-flex uk-margin-large-top uk-flex-column uk-flex-center uk-flex-middle">
                <section className="timeline-area">
                    <div className="timeline-content">
                        <span className="uk-badge uk-text-light">11/2020 - Até hoje</span>
                        <h4 className="uk-text-green uk-margin-remove">Assistente Administrativo de TI</h4>
                        <h4 className="uk-text-white uk-margin-remove">UNITPAC</h4>
                    </div>
                    <div className="timeline-content">
                        <span className="uk-badge uk-text-light uk-background-secondary">10/2020</span>
                        <h4 className="uk-text-dark-gray uk-text-regular uk-margin-remove">Técnico de Suporte em TI </h4>
                        <h4 className="uk-text-dark-gray uk-text-regular uk-margin-remove">SESI • Estágio</h4>
                    </div>
                    <div className="timeline-content">
                        <span className="uk-badge uk-text-light uk-background-secondary">05/2019</span>
                        <h4 className="uk-text-dark-gray uk-text-regular uk-margin-remove">Web Developer</h4>
                        <h4 className="uk-text-dark-gray uk-text-regular uk-margin-remove">NERDS • Estágio Voluntário</h4>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Experience;