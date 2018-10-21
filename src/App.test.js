import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';
import BTCPrice from './components/btc';

const initialState = {
	interval: 60,
	btc_price: 0,
	eth_price: 0
}

const mockStore = configureStore()
let store, wrapper

beforeEach( () => {
	store = mockStore(initialState)
	wrapper = shallow(<App store={store} />)
})

it('renders App without crashing', () => {
	console.log(wrapper.debug(true))
	expect(store).toEqual(false)
});


it.only('renders a btc price component', () => {
	console.log(wrapper.debug(true))
	console.log(wrapper.find(BTCPrice))

	expect(wrapper.find(BTCPrice)).toEqual(true)
})