import React, { useState, useEffect } from 'react';

function DeleteRequestAsyncAwait() {
    const [status, setStatus] = useState(null);

    useEffect(() => {

        async function deletePost() {
            await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
            setStatus('Delete successful');
        }

        deletePost();
    }, []);

    return (
        <div className="card-body">
            Status: {status}
        </div>
    );
}

export { DeleteRequestAsyncAwait };