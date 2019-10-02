import React from 'react';
import { Header, BoardList } from 'components';
import { boardPostRequest } from '../actions/board';
import 'App.css';

class Home extends React.Component {

    constructor(props) {
        super(props);        
        this.handlePost = this.handlePost.bind(this);
    }

    handlePost(contents) {
        return this.props.boardPostRequest(contents).then(
            () => {
                if(this.props.postStatus.status === "SUCCESS") {
                    alert("추가 성공");
                } else {
                    alert("추가 실패");
                    return;
                }
            }
        )
    }

    render(){
        let re = /(login|detail)/;
        let isAuth = re.test(this.props.location.pathname);

        const board = (
            <BoardList onPost={this.props.handlePost} />
        );

        return (
            <div>
               {isAuth ? undefined : <Header />}
               <BoardList />
            </div>
        );
    }
}


export default Home;