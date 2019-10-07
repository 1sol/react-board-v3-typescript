import React from 'react'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { memberList } from '../store/modules/member';
import 'App.css';
import { BoardAdd } from '.';
import BoardDelete from './BoardDelete';

const BoardList = () => {
    return(
    <div className="board-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell align="right">rank</TableCell>
            <TableCell align="right">department</TableCell>
            <TableCell align="right"><BoardAdd/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberList.map((member, index) => (
            <TableRow key={index} hover role="checkbox">
              <TableCell component="th">{member.id}</TableCell>
              <TableCell component="th">{member.name}</TableCell>
              <TableCell align="right">{member.rank}</TableCell>
              <TableCell align="right">{member.department}</TableCell>
              <TableCell align="right">
                <Button color="primary">수정</Button>
                <BoardDelete/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    );
}

export default BoardList;