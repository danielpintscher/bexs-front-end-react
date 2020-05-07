import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  changeCardNumberValue, 
  changeCardNameValue, 
  changeCardValidateValue,
  changeCardCVVValue,
  changeCardCVVActive
 } from '../../actions';
import InputMask from 'react-input-mask';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './Form.scss';

class Form extends React.Component {
  state = {
    inputCardNumberValue: '',
    inputCardNameValue: '',
    inputCardValidateValue: '',
    inputCardCVVValue: '',
    cardNumberError: false,
    cardNameError: false,
    cardValidateError: false,
    installmentSelect: false
  }

  inputCardNumberChange = event => {


    let value = event.target.value;
    let validator = /(^0|[a-zA-Z])/;

    this.setState({
      cardNumberError: false
    })

    if ( validator.test(event.target.value) ) {
      this.setState({
        cardNumberError: 'Número de cartão inválido'
      })
    } 

    this.setState({
      inputCardNumberValue: value
    })
  }

  inputCardNameChange = event => {

    let value = event.target.value;
    let validator = /[ˆ\D].\s.[ˆ\D]/gi;

    this.setState({
      cardNameError: false
    })

    if ( !validator.test(event.target.value) ) {
      this.setState({
        cardNameError: 'insira seu nome completo'
      })
    } 

    this.setState({
      inputCardNameValue: value
    })
  }

  inputCardValidateChange = event => {

    this.setState({
      cardValidateError: false
    })

    let dt = new Date();
    let actualYear = String(dt.getFullYear());

    if ( event.target.value.length === 5 && Number(event.target.value.split('/')[1]) < Number(actualYear.substr(2, 2))) {
      this.setState({
        cardValidateError: 'Data inválida'
      })
    } 

    this.setState({
      inputCardValidateValue: event.target.value
    })
  }

  inputCardCVVChange = event => {
    this.setState({
      inputCardCVVValue: event.target.value
    })
  }

  changeSelect = event => {

    this.setState({
      installmentSelect: false
    });

    if ( event.target.value !== '' ) {
      this.setState({
        installmentSelect: true
      });
    }
  }

  render() {
    const { 
      changeCardNumberValue,
      changeCardNameValue,
      changeCardValidateValue,
      changeCardCVVValue,
      changeCardCVVActive
    } = this.props;

    const { 
      inputCardNumberValue, 
      inputCardNameValue, 
      inputCardValidateValue, 
      inputCardCVVValue, 
      cardNumberError, 
      cardNameError, 
      cardValidateError,
      installmentSelect
    } = this.state;

    return (
      <div className="form">
          <form>
              <label className={ inputCardNumberValue ? cardNumberError ? "label -input -error -focus" : "label -input -focus" : "label -input" }>
                <div className="placeholder">Número do cartão</div>
                <InputMask
                  mask="9999 9999 9999 9999"
                  maskChar=""
                  onChange={this.inputCardNumberChange}
                  type="text"
                  value={inputCardNumberValue}
                  onKeyUp={() => changeCardNumberValue(inputCardNumberValue)}
                  />
                <div className="form-error">{cardNumberError}</div>
              </label>
              <label className={ inputCardNameValue ? cardNameError ? "label -input -error -focus" : "label -input -focus" : "label -input" }>
                <div className="placeholder">Nome (igual ao cartão)</div>
                <input 
                  onChange={this.inputCardNameChange}
                  type="text"
                  value={inputCardNameValue}
                  onKeyUp={() => changeCardNameValue(inputCardNameValue)}></input>
                <div className="form-error">{cardNameError}</div>
              </label>
              <label className={ inputCardValidateValue ? cardValidateError ? "label -input -error -w50 -focus" : "label -input -w50 -focus" : "label -w50 -input" }>
                <div className="placeholder">Validade</div>
                <InputMask
                  mask="99/99"
                  maskChar=""
                  onChange={this.inputCardValidateChange}
                  type="text"
                  value={inputCardValidateValue}
                  onKeyUp={() => changeCardValidateValue(inputCardValidateValue)} />
                <div className="form-error">{cardValidateError}</div>
              </label>
              <label className={ inputCardCVVValue ? "label -w50 -right -input -focus" : "label -w50 -right -input" }>
                <div className="placeholder">CVV</div>
                <InputMask
                  mask="999"
                  maskChar=""
                  onChange={this.inputCardCVVChange} 
                  onFocus={() => changeCardCVVActive(true)}
                  onBlur={() => changeCardCVVActive(false)}
                  type="text"
                  value={inputCardCVVValue}
                  onKeyUp={() => changeCardCVVValue(inputCardCVVValue)} />
                <div className="form-error"></div>
                <i className="-tip"></i>
              </label>
              <label className={installmentSelect ? "label -select -focus" : "label -select"}>
                <i><FontAwesomeIcon icon={ faChevronDown } /></i>
                <div className="placeholder">Número de parcelas</div>
                <select
                  onChange={this.changeSelect}
                >
                    <option value=""></option>
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                </select>
                <div className="form-error"></div>
              </label>
              <button onClick={(evt) => { evt.preventDefault(); }} className="btn btn-primary">CONTINUAR</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  cardNumber: store.clickState.cardNumber,
  cardName: store.clickState.cardName,
  cardValidate: store.clickState.cardValidate,
  cardCVV: store.clickState.cardCVV,
  cardCVVActive: store.clickState.cardCVVActive,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeCardNumberValue, changeCardNameValue, changeCardValidateValue, changeCardCVVValue, changeCardCVVActive }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Form);