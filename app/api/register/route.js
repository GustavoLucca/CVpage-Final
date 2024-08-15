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
        await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'User creation failed.' }), { status: 500 });
    }
}
