import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching user:', error));
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Details</h1>
            {user && (
                <>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                </>
            )}
        </div>
    );
}

export default UserDetails;
