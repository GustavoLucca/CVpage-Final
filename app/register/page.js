'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            localStorage.setItem('credentials', JSON.stringify({ username, password }));
            router.push('/credentials'); // Redirect to the credentials page
            setTimeout(() => {
                window.location.reload(); // Refresh the page after a short delay
            }, 100); // 100ms delay to ensure redirection happens first
        } else {
            alert('Registration failed.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
}
