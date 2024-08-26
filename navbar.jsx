'use client';

import {useAuth} from "@/useAuth"; // Adjust path as needed
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('credentials');
        setIsLoggedIn(false);
        router.push('/'); // Redirect to home page
    };

    return (
        <nav>
            <ul>
                    <Link href="/" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Home</Link>
                    <Link href="/Education" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Education & Skills</Link>
                    <Link href="/Projects" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Projects</Link>
                    <Link href="/Contact" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Contact</Link>

                {isLoggedIn ? (
                    <>
                            <Link href="/credentials" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Credentials</Link>
                            <button onClick={handleLogout} className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Logout</button>
                    </>
                ) : (
                    <>
                            <Link href="/register" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Register</Link>
                            <Link href="/login" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Login</Link>
                    </>
                )}
            </ul>
        </nav>
    );
}
