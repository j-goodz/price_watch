import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';
import BTCPrice from './components/btc';
import ETHPrice from './components/eth';
import { RefreshButton } from './containers/refresh-button';
import { TransferButton } from './containers/transfer-button';
import { updateBTCPrice, updateETHPrice } from './actions/index';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';

const initialState = {
	interval: 60,
	btc_price: 0,
	eth_price: 0
}

const expected_eth_price = 50
const expected_btc_price = 500

const mockStore = configureStore()
let store, appWrapper, btcWrapper, ethWrapper, refreshWrapper, transWrapper, mockFetchBTCPrice, mockFetchETHPrice, onFulfilled, onRejected


beforeEach( () => { 
	mockFetchBTCPrice = jest.fn()
	mockFetchETHPrice = jest.fn()
	store = mockStore(initialState)
	appWrapper = shallow(<App store={store} />)
	btcWrapper = shallow(<BTCPrice btc_price={ expected_btc_price } />)
	ethWrapper = shallow(<ETHPrice eth_price={ expected_eth_price } />)
	refreshWrapper = shallow(<RefreshButton fetchBTCPrice={mockFetchBTCPrice} fetchETHPrice={mockFetchETHPrice} />)
	transWrapper = shallow(<TransferButton store={store} />)
	onFulfilled = sinon.spy()
	onRejected = sinon.spy()
})


describe('Components render without failing', () => {
	it('renders the App component', () => {
		expect(appWrapper.length).toEqual(1)
	});

	it('renders the BTCPrice component', () => {
		expect(btcWrapper.length).toEqual(1)
	});

	it('renders the ETHPrice component', () => {
		expect(ethWrapper.length).toEqual(1)
	});

	it('renders the RefreshButton component', () => {
		expect(refreshWrapper.length).toEqual(1)
	});

	it('renders the TransferButton component', () => {
		expect(transWrapper.length).toEqual(1)
	});
})


describe('Renders crypto price text/string', () => {
	it('renders btc text/string', () => {
		expect(btcWrapper.text()).toEqual(`1 BTC = $${expected_btc_price} USD `)
	})

	it('renders eth text/string', () => {
		expect(ethWrapper.text()).toEqual(`1 ETH = $${expected_eth_price} USD `)
	})
})


describe('ActionCreator creates actions correctly', () => {    
    it('creates updateBTCPrice action', () => {
        const price = 200
        let action = updateBTCPrice(price)
        let expected = {
        	type: "UPDATE_BTC_PRICE",
        	btc_price: price
        }
        expect(action).toEqual(expected)
    })

    it('creates updateETHPrice action', () => {
        const price = 300
        let action = updateETHPrice(price)
        let expected = {
        	type: "UPDATE_ETH_PRICE",
        	eth_price: price
        }
        expect(action).toEqual(expected)
    })
})


describe('Verifies button onclick events are called', () => {  
  it('simulates Refresh Price onclick events', () => {
    refreshWrapper.find('button').simulate('click')
    expect(mockFetchBTCPrice).toHaveBeenCalled()
    expect(mockFetchETHPrice).toHaveBeenCalled()
  })
})


describe('Verifies button text is displayed', () => {  
	it('displays Refresh Price button text', () => {
	  expect(refreshWrapper.find('button').text()).toEqual('Refresh Price')
	})

	it('displays Transfer button text', () => {
	  expect(transWrapper.find('button').text()).toContain('Transfer $')
	})
})



describe('Moxios', () => {
	it('installs', () => { 
		let defaultAdapter = axios.defaults.adapter
		moxios.install()
		expect(axios.defaults.adapter).not.toBe(defaultAdapter)
		moxios.uninstall()
	  })

	it('uninstalls', () => {
        const defaultAdapter = axios.defaults.adapter
        moxios.install()
		moxios.uninstall()
		expect(axios.defaults.adapter).toBe(defaultAdapter)
	})
	
	it('executes requests', (test) => {
        moxios.install()
		axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			expect(moxios.requests.count()).toEqual(1)
			test()
		})
	})

	it('mocks responses', (test) => {
		axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot').then(onFulfilled)

		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			request.respondWith({ status: 200, response: expected_btc_price	}).then(() => {
				const response = onFulfilled.getCall(0).args[0]
				expect(onFulfilled.called).toBeTruthy
				expect(response.status).toEqual(200)
				expect(response.data).toEqual(expected_btc_price)
				test();
			})
		})
	})

	it('mocks 404 error responses', (done) => {
		axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot').then(onFulfilled, onRejected)
		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			request.respondWith({ status: 404 }).then(() => {
				expect(onFulfilled.called).toEqual(false)
				expect(onRejected.called).toEqual(true)
				done();
			})
		})
	})
})