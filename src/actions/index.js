import { 
    CHANGE_CARD_NUMBER_VALUE, 
    CHANGE_CARD_NAME_VALUE,
    CHANGE_CARD_VALIDATE_VALUE,
    CHANGE_CARD_CVV_VALUE,
    CHANGE_CARD_CVV_ACTIVE
 } from './actionTypes';

export const changeCardNumberValue = value => ({
    type: CHANGE_CARD_NUMBER_VALUE,
    cardNumber: value
});

export const changeCardNameValue = value => ({
    type: CHANGE_CARD_NAME_VALUE,
    cardName: value
});

export const changeCardValidateValue = value => ({
    type: CHANGE_CARD_VALIDATE_VALUE,
    cardValidate: value
});

export const changeCardCVVValue = value => ({
    type: CHANGE_CARD_CVV_VALUE,
    cardCVV: value
});

export const changeCardCVVActive = value => ({
    type: CHANGE_CARD_CVV_ACTIVE,
    cardCVVActive: value
});