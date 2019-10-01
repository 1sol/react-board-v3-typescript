import React from 'react';
import { Header } from 'components';

class Home extends React.Component {
    render(){
        let re = /(login|detail)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
               {isAuth ? undefined : <Header />}
               <h1>home</h1>
            </div>
        );
    }
}

export default Home;