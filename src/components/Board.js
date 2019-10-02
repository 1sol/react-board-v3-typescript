import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import 'App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '75%',
    margin: '2rem auto',
    overflowX: 'auto',
    border: '1px solid #eee',
    borderRadius: '5px'
  },
}));

function createData(name, rank, department) {
  return { name, rank, department };
}

const rows = [
  createData('Jake, JunKil Been', 'CEO', ''),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">rank</TableCell>
            <TableCell align="right">department</TableCell>
            <TableCell align="right">
              <Fab size="small" color="secondary" aria-label="add" className={classes.margin}><AddIcon /></Fab>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} hover role="checkbox">
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">
                <Button color="primary" className={classes.button}>수정</Button>
                <Button color="secondary" className={classes.button}>삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}