import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import 'App.css';
import { initialState } from "../store/modules/member";

const useStyles = makeStyles(() => ({
  root: {
    width: '75%',
    margin: '2rem auto',
    overflowX: 'auto',
    border: '1px solid #eee',
    borderRadius: '5px'
  },
}));

function createData(id, name, rank, department) {
  return { id, name, rank, department };
}

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell align="right">rank</TableCell>
            <TableCell align="right">department</TableCell>
            <TableCell align="right">
              <Fab size="small" color="secondary" aria-label="add" className={classes.margin}><AddIcon /></Fab>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {initialState.map((row) => (
            <TableRow key={row.id} hover role="checkbox">
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
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
