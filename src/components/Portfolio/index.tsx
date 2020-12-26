import React from 'react';
import list from './listPortfolio'

const Portfolio: React.FC = () => {
    return (
        <div id="portfolio" className="uk-container uk-section">
            <div className="uk-text-xlarge uk-text-center uk-text-bold">
                Portfólio</div>

            <ul className="uk-margin-large-top uk-child-width-1-3@m uk-grid">
                {list.map((item, index) => (
                    <li key={index} uk-slider>
                        <div className="uk-card uk-border-rounded uk-card-secondary">
                            <div className="uk-card-media-top">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title uk-text-bold">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Portfolio;