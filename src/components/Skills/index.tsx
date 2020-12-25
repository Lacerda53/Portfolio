import React from 'react';
import { todos, frontend, backend } from './listSkills'

const Skills: React.FC = () => {
    return (
        <div className="uk-container uk-section">
            <div className="uk-text-xlarge uk-text-center uk-text-bold">
                Habilidades
            </div>

            <div className="uk-margin-large-top">
                <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column">
                    <ul className="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                        <li><a href="#">Todos</a></li>
                        <li><a href="#">Frontend</a></li>
                        <li><a href="#">Backend</a></li>
                        <li><a href="#">Outros</a></li>
                    </ul>

                    <div className="uk-switcher uk-margin uk-flex uk-flex-center uk-flex-middle uk-flex-column">
                        <div className="uk-grid uk-grid-small uk-child-width-1-2">{todos.map((e) => (
                            <div key={e.skill} className="uk-width-1-6 uk-margin-small-bottom">
                                <img src={e.skill} alt="" />
                            </div>
                        ))}
                        </div>

                        <div className="uk-grid uk-grid-small uk-child-width-1-2">{frontend.map((e) => (
                            <div key={e.skill} className="uk-width-1-6">
                                <img src={e.skill} alt="" />
                            </div>
                        ))}
                        </div>

                        <div className="uk-grid uk-grid-small uk-child-width-1-2">{backend.map((e) => (
                            <div key={e.skill} className="uk-width-1-6">
                                <img src={e.skill} alt="" />
                            </div>
                        ))}
                        </div>
                        <div className="uk-grid uk-grid-small uk-child-width-1-2">{backend.map((e) => (
                            <div key={e.skill} className="uk-width-1-6">
                                <img src={e.skill} alt="" />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;