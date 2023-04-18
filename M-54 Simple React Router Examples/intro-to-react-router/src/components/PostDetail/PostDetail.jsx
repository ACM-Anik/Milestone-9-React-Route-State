import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id , title, userId, body} = post;

    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h1>Post Detail of ID: {id}</h1>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;