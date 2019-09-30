import React from 'react';
import { Header } from 'components';

class App extends React.Component {
    render(){
        let re = /(login|detail)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
               {isAuth ? undefined : <Header />}
            </div>
        );
    }
}

export default App;