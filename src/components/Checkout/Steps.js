import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Steps.scss';

class Steps extends React.Component {

  render() {
    return (
      <div className="steps">
          <div className="step-title">Etapa </div>
          <div className="step active">Carrinho<i><FontAwesomeIcon icon={ faChevronRight } size="lg" /></i></div>
          <div className="step">Pagamento<i><FontAwesomeIcon icon={ faChevronRight } size="lg" /></i></div>
          <div className="step">Confirmação</div>
      </div>
    );
  }
}
  
export default Steps;