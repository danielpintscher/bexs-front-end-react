import React from 'react';
import {shallow} from 'enzyme';
import { Store } from '../../store';
import Form from './Form';

describe('Formulário de Pagamento', () => {

    it('Cartão válido', () => {
        const form = shallow(<Form store={Store}/>).dive().dive();
        expect(form.find('label').at(0).find('.form-error').text()).toEqual("");

        form.find('label').at(0).find('InputElement').simulate('change', { target: { value: '4111111111111' } });
        form.find('label').at(0).find('InputElement').simulate('keyUp', {
            which: 27,
            target: {
                blur() {
                    form.find('label').at(0).find('input').simulate('blur');
                },
            }
        });

        expect(form.find('label').at(0).find('.form-error').text()).toEqual("");
    })

    it('Cartão inválido', () => {
        const form = shallow(<Form store={Store}/>).dive().dive();
        expect(form.find('label').at(0).find('.form-error').text()).toEqual("");

        form.find('label').at(0).find('InputElement').simulate('change', { target: { value: '888aaa88a8a' } });
        form.find('label').at(0).find('InputElement').simulate('keyUp', {
            which: 27,
            target: {
                blur() {
                    form.find('label').at(0).find('input').simulate('blur');
                },
            }
        });

        expect(form.find('label').at(0).find('.form-error').text()).toEqual("Número de cartão inválido");
    })

    it('Nome válido', () => {
        const form = shallow(<Form store={Store}/>).dive().dive();
        expect(form.find('label').at(1).find('.form-error').text()).toEqual("");

        form.find('label').at(1).find('input').simulate('change', { target: { value: 'Nome Sobrenome' } });
        form.find('label').at(1).find('input').simulate('keyUp', {
            which: 27,
            target: {
                blur() {
                    form.find('label').at(1).find('input').simulate('blur');
                },
            }
        });

        expect(form.find('label').at(1).find('.form-error').text()).toEqual("");
    })

    it('Nome inválido', () => {
        const form = shallow(<Form store={Store}/>).dive().dive();
        expect(form.find('label').at(1).find('.form-error').text()).toEqual("");

        form.find('label').at(1).find('input').simulate('change', { target: { value: 'Dan' } });
        form.find('label').at(1).find('input').simulate('keyUp', {
            which: 27,
            target: {
                blur() {
                    form.find('label').at(1).find('input').simulate('blur');
                },
            }
        });

        expect(form.find('label').at(1).find('.form-error').text()).toEqual("insira seu nome completo");
    })
})