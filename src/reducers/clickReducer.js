import { 
    CHANGE_CARD_NUMBER_VALUE, 
    CHANGE_CARD_NAME_VALUE,
    CHANGE_CARD_VALIDATE_VALUE,
    CHANGE_CARD_CVV_VALUE,
    CHANGE_CARD_CVV_ACTIVE
} from '../actions/actionTypes';

const initialState = {
    cardNumber: '**** **** **** ****',
    cardName: 'Nome do titular',
    cardValidate: '00/00',
    cardCVV: '000',
    cardCVVActive: false,
    cardNumberValid: false
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CARD_NUMBER_VALUE:

        let validCard = false;

        if ( action.cardNumber.replace(/[^0-9]/gi, '').length > 12 ) {
            validCard = true;
        }

        return {
            ...state,
            cardNumber: action.cardNumber !== '' ? action.cardNumber : initialState.cardNumber,
            cardNumberValid: validCard
        };
        case CHANGE_CARD_NAME_VALUE:
        return {
            ...state,
            cardName: action.cardName !== '' ? action.cardName : initialState.cardName
        };
        case CHANGE_CARD_VALIDATE_VALUE:
        return {
            ...state,
            cardValidate: action.cardValidate !== '' ? action.cardValidate : initialState.cardValidate
        };
        case CHANGE_CARD_CVV_VALUE:
        return {
            ...state,
            cardCVV: action.cardCVV
        };
        case CHANGE_CARD_CVV_ACTIVE:
        return {
            ...state,
            cardCVVActive: action.cardCVVActive
        };
        default:
        return state;
    }
};