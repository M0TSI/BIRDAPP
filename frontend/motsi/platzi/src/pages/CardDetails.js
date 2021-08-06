import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CardDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import Card from '../components/Card';
import DeleteCardModal from '../components/DeleteCardModal';

function CardDetails(props) {
  const card = props.card;

  return (
    <div>
      <div className="CardDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 CardDetails__hero-attendant-name">
              <h1>
                {card.firstName} {card.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Card
              firstName={card.firstName}
              lastName={card.lastName}
              email={card.email}
              twitter={card.twitter}
              jobTitle={card.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/card/${card.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteCardModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteCard={props.onDeleteCard}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
