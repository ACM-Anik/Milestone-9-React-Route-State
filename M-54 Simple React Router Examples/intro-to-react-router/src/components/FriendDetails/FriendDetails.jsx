import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h5>Name: {friend.name}</h5>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;