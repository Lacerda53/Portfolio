import React from 'react';
import image from '../../assets/about.png';

const About: React.FC = () => {
    return (
        <div className="uk-container uk-section">
            <div className="uk-text-xlarge uk-text-center uk-text-bold">
                Sobre mim
            </div>
            <div className="uk-flex ul-flex-center uk-margin-large-top uk-flex-middle uk-grid">
                <div className="uk-flex uk-flex-center uk-flex-middle uk-width-1-2@m">
                    <div className="uk-flex uk-flex-center" uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true">
                        <div className="uk-flex uk-flex-center">
                            <div className="uk-bg-purple"></div>
                            <img style={{ position: 'relative' }} width='80%' src={image}></img>
                        </div>
                    </div>
                </div>
                <div className="uk-width-expand uk-margin uk-text-left@m uk-first-column">
                    <h5 className="uk-text-muted uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
                        Olá, me chamo Guilherme Andrade Lacerda, sou desenvolvedor fullstack, acadêmico de Sistemas de Informação, cursando o 7º período. Atualmente trabalho como Auxiliar Administrativo de TI no UNITPAC - Centro Universitário Tocantinense Presidente Antônio Carlos.
                        </h5>
                    <br />
                    <h5 className="uk-text-muted uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
                        Sou um pouco curioso, sempre que posso quero aprender coisas novas. Gosto de usar C# em projetos de backend e Javascript (ReactJS) em projetos de frontend, estou sempre buscando aprimorar meus conhecimentos e habilidades, sou dedicado, responsável, paciente, amigável e com ótima comunicação.
                        </h5>
                    <br />
                    <h5 className="uk-text-muted uk-margin-remove" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
                        Amo aprender e ensinar, procuro sempre compartilhar meus conhecimentos com outras pessoas, nas horas vagas escrevo alguns artigos no Medium de algo que aprendi ou assuntos pouco falado por lá.
                        </h5>
                </div>
            </div>
        </div>
    );
}

export default About;