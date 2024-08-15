import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';
import Footer from './Footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang="en">
        <UserProvider>
        <head>
            <title>Digital CV</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/styles/globals.css" />
        </head>
        <body>
        <div className="flex-container">
            <header>
                <nav>
                    <Link href="/" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Home</Link>
                    <Link href="/Education" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Education
                        & Skills</Link>
                    <Link href="/Projects"
                          className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Projects</Link>
                    <Link href="/Contact"
                          className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Contact</Link>
                    <Link href="/register"
                          className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Register</Link>
                    <Link href="/login"
                          className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Login</Link>

                </nav>
            </header>
            <main className="flex-main">
                {children}
            </main>
                <Footer/>
        </div>
        </body>
        </UserProvider>
        </html>
);
};

export default Layout;
