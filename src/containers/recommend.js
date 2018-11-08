import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line } from 'recharts';
import Stringify from 'react-stringify';

export class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hist_data: [],
        }
    }

    componentWillMount() {
    }

	render() {
		return (
            <div>
                price_hist length: {this.props.price_hist.length}                 
                <br /> 
                snapshots: <Stringify value={this.props.snapshots} /><br />
                <br />
                Price hist: <Stringify value={this.props.price_hist} />
        
            </div>
        );
	}
}

const mapStateToProps = (state) => {
	const { price_hist, snapshots } = state
  	return { price_hist, snapshots }
  	// return state
}

export default connect (mapStateToProps)(Recommend)
