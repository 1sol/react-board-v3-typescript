import React from 'react';
import queryString from 'query-string';

const Detail = ({location, match}) => {
    const query = queryString.parse(location.search);
    const {color} = query;

    return(
        <div>
            <h1 style={{color}}>detail</h1>
            <p>
                {match.params.name} 디테일 페이지
                {location.search}
            </p>
        </div>
    )
};

export default Detail;