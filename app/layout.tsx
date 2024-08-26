import NavBar from "@/navbar";
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
                    <NavBar />
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
