import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Stringify from 'react-stringify';
import * as actionCreators from '../actions/index';

export class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hist_data: [],
            snapshotAvg: 0,
            avgPcnt: 0,
            peakPrice: 0,
            m1: 0,
            m2: 0,
            m3: 0,
            m4: 0,
            m5: 0,
            m6: 0
        }
    }

    componentDidMount() {
        this.calcRecommend()
    }
    
    async calcRecommend() {
        await this.props.fetchPriceHist()

        this.setState({ peakPrice: this.props.snapshots.peak_price })
        this.setState({ m1: this.props.snapshots.m1_price })
        this.setState({ m2: this.props.snapshots.m2_price })
        this.setState({ m3: this.props.snapshots.m3_price })
        this.setState({ m4: this.props.snapshots.m4_price })
        this.setState({ m5: this.props.snapshots.m5_price })
        this.setState({ m6: this.props.snapshots.m6_price })

        const snapshotAvg = ((this.state.m1.close + this.state.m2.close + this.state.m3.close + this.state.m4.close + this.state.m5.close + this.state.m6.close) / 6).toFixed(2)
        const avgPcnt = (snapshotAvg / this.state.peakPrice.close * 100).toFixed(0)

        this.setState({ snapshotAvg: snapshotAvg  })
        this.setState({ avgPcnt: avgPcnt  })
    }
    
    
    render() {
		return (
            <div>
                <p>
                    The 6 month average Bitcoin price is { this.state.avgPcnt }% of the peak price ${this.state.peakPrice.close} on {this.state.peakPrice.date}.
                    <br /><br />
                    <b>Recommendation:</b>
                    <br /><br />
                    { 
                        this.state.avgPcnt < 60 
                        ? "BUY! The current price percentage from peak is BELOW 60% which is positive signal." 
                        : "DON'T BUY! The current price percentage from peak is ABOVE 60% which is a negative signal." 
                    }
                </p>
                <br />
                <p>Below are the price snapshots for the last 6 months (rolling)</p>
                <table width="500px" align="center">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>{this.state.m1.date}</td>
                            <td>
                                ${this.state.m1.close} USD 
                                &nbsp;({ (this.state.m1.close / this.state.peakPrice.close).toFixed(2) + "%" } of ATH)
                            </td>
                        </tr>
                        <tr>
                            <td>{this.state.m2.date}</td>
                            <td>
                                ${this.state.m2.close} USD 
                                &nbsp;({ (this.state.m2.close / this.state.peakPrice.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                        <tr>
                            <td>{this.state.m3.date}</td>
                            <td>
                                ${this.state.m3.close} USD 
                                &nbsp;({ (this.state.m3.close / this.state.peakPrice.close).toFixed(2) + "%" } of ATH)
                            </td>
                        </tr>
                        <tr>
                            <td>{this.state.m4.date}</td>
                            <td>
                                ${this.state.m4.close} USD 
                                &nbsp;({ (this.state.m4.close / this.state.peakPrice.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                        <tr>
                            <td>{this.state.m5.date}</td>
                            <td>
                                ${this.state.m5.close} USD 
                                &nbsp;({ (this.state.m5.close / this.state.peakPrice.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                        <tr>
                            <td>{this.state.m6.date}</td>
                            <td>
                                ${ (this.state.m6.close) } USD 
                                &nbsp;({ (this.state.m6.close / this.state.peakPrice.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                    </tbody>
                </table>
                <br />
                <p>
                    This price recommendation is based on several concepts. <a href="https://www.investopedia.com/articles/active-trading/070715/making-money-wyckoff-way.asp">Wyckoff Way</a> used to identify historical patterns, <a href="https://en.wikipedia.org/wiki/Hype_cycle">Hype Cycles</a>, and an analysis of Bitcoin price patterns
                    <br /> during market cycles such as <a href="https://medium.com/@coinscrum/first-anniversary-review-of-the-fractal-relationship-between-bitcoins-first-two-bubbles-and-what-c548eb2647b9"> the fractal relationship between bitcoin's first two bubbles and what they might tell us about a third.</a>
                </p>

            </div>
        );
	}
}

const mapStateToProps = (state) => {
    const { price_hist, snapshots } = state
    return { price_hist, snapshots }
}

export default connect (mapStateToProps, actionCreators)(Recommend)