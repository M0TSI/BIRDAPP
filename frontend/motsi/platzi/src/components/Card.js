import React from 'react';

import './styles/Card.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="Card__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Card__section-name">
          <Gravatar className="Card__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Card__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Card__footer">#platziconf</div>
      </div>
    );
  }
}

export default Card;
