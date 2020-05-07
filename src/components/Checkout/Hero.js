import React from 'react';
import Card from './Card.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './Hero.scss';
import { ReactComponent as IcoCard } from './assets/icons/ico-card.svg'

class Hero extends React.Component {

  render() {
    return (
      <div className="hero">
        <button href={'#'} className="act-back-payment"><i><FontAwesomeIcon icon={ faChevronLeft } size="lg" /></i> Alterar forma de pagamento</button>
        <div className="hero-title">
            <IcoCard alt="Adicione um novo cartão de crédito" /> <span>Adicione um novo cartão de crédito</span>
        </div>
        <Card />
      </div>
    );
  }
}
  
export default Hero;