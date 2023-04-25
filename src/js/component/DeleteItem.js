import React, { useState, useEffect } from 'react';

function DeleteRequestAsyncAwait() {
    const [status, setStatus] = useState(null);

    useEffect(() => {

        async function deletePost() {
            await fetch('https://assets.breatheco.de/apis/fake/todos/user/66006600', { method: 'DELETE' });
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