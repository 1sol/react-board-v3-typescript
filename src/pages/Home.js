import React from 'react';
import { Header, Board } from 'components';

class Home extends React.Component {

    render(){
        let re = /(login|detail)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
               {isAuth ? undefined : <Header />}
               <Board />
            </div>
        );
    }
}


export default Home;
