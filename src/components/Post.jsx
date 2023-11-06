import React, { useEffect, useState } from "react";
import './styles.css';

const Post = ({ post }) => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const fetchAuthor = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            const data = await response.json();
            setAuthor(data);
        };

        fetchAuthor();
    }, [post.userId]);

    return (
        <div className="post">
            <h3 className="post-title">{post.title}</h3>
            <div className="post-body">
                {author && <p>By: {author.name}</p>}
                <p>{post.body}</p>
                <div className="separator"></div>
            </div>
        </div>
    );
};

export default Post;
