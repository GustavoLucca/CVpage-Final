import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
    return open({
        filename: './database.sqlite',
        driver: sqlite3.Database,
    });
}

export async function POST(req) {
    const { username, password } = await req.json();
    const db = await openDb();

    try {
        const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

        if (user) {
            return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Login failed.' }), { status: 500 });
    }
}
