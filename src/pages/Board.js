import React from 'react';
import { BoardList } from '../components';
import stores from '../stores/modules/member';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memberList: []
    };
  }

  componentDidMount() {
    const memberList = stores.memberList;
    console.log("member list = ", memberList);
  }

  render() {
    return(
      <div>
        <BoardList />
      </div>
    );
  }
}

export default Board;