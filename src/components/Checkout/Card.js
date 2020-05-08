import React from 'react';
import { connect } from 'react-redux';

import './Card.scss';

class Card extends React.Component {

  fitText() {
    let cardNumber = Number(this.props.cardNumber.replace(/\s/g, ''));

    if ( cardNumber > 999999999999 ) return true;
    return false;
  }

  render() {
    const {
      cardNumber,
      cardName,
      cardValidate,
      cardCVVActive,
      cardNumberValid
    } = this.props;

    const brand = cardNumberValid && !cardCVVActive ? <div className="card-brand-visa"></div> : '';

    return (
      <div className={ 
          !cardCVVActive ? cardNumberValid ? "card -color" : "card" : cardNumberValid ? "card -verse -color" : " card -verse"
        }>
        {brand}
        <div className={ this.fitText() ? 'card-number fitCard' : 'card-number' }>{ cardNumber }</div>
        <div className="card-name">{ cardName }</div>
        <div className="card-validate">{ cardValidate }</div>
      </div>
    );

  }
}

const mapStateToProps = store => ({
  cardNumber: store.clickState.cardNumber,
  cardName: store.clickState.cardName,
  cardValidate: store.clickState.cardValidate,
  cardCVVActive: store.clickState.cardCVVActive,
  cardNumberValid: store.clickState.cardNumberValid
});
  
export default connect(mapStateToProps)(Card);