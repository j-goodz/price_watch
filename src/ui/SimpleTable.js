import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, ticker, book_value, market_value, change) {
  id += 1;
  return { id, name, ticker, book_value, market_value, change };
}

const data = [
  createData('Bitcoin', "BTC", "$1,863.46", "$3,599.73", "+52%"),
  createData('Ethereum', "ETH", "$58.36", "$116.06", "+50%"),
  createData('Bitocin Cash', "BCH", "$66.89", "$127.15", "+53%"),
  createData('Monero', "XMR", "$27.39", "$45.68", "+60%"),
  createData('DASH', "DASH", "$35.85", "$73.77", "+49%"),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Cryptocurrency</TableCell>
            <TableCell align="center">Ticker</TableCell>
            <TableCell align="right">Book Value</TableCell>
            <TableCell align="right">Market Value</TableCell>
            <TableCell align="right">% Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="center">{n.ticker}</TableCell>
              <TableCell align="right">{n.book_value}</TableCell>
              <TableCell align="right">{n.market_value}</TableCell>
              <TableCell align="right">{n.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);