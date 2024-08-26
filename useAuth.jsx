import { useEffect, useState } from 'react';

export function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = () => {
            const credentials = localStorage.getItem('credentials');
            setIsLoggedIn(!!credentials);
        };

        // Check login status initially
        checkLoginStatus();

        // Listen for storage changes
        window.addEventListener('storage', checkLoginStatus);

        // Cleanup listener when the component unmounts
        return () => window.removeEventListener('storage', checkLoginStatus);
    }, []);

    return { isLoggedIn, setIsLoggedIn };
}
