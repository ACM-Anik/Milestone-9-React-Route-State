import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 px-2 hover:bg-purple-600 hover:px-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;