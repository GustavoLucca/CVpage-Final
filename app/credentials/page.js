'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Credentials() {
    const [credentials, setCredentials] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
        if (storedCredentials) {
            setCredentials(storedCredentials);
        } else {
            router.push('/'); // Redirect to home if no credentials found
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('credentials');
        router.push('/'); // Redirect to home page after logout
    };


    if (!credentials) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Your Credentials</h1>
            <p>Username: {credentials.username}</p>
            <p>Password: {credentials.password}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
