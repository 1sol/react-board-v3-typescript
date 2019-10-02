import React from 'react';

const Details = ({children}) => {
    return (
        <div>
            <h1>포스트</h1>
            {children}
        </div>
    );
};

export default Details;