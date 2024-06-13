import React, { useEffect, useState } from 'react';

export default function Six() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.org/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);

    return (
        <div>
            {
                data ? (
                    data.map(post => (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
}
