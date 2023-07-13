"use client";

import dynamic from 'next/dynamic'
import React, { useState } from "react";
import Link from 'next/link';

function onSubmit(e, username, password) {
    e.preventDefault();
    console.log(username, password)
    let data = { username: username, password: password }
    axios.post('../api/authUser', data)
        .then((response) => {
            console.log(response)
        })
        .catch((e) => { console.log(e) }
        )
}

export default function login() {
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');

    return (
        <main className="max-w-md mx-auto mt-20">
            <div className="bg-white rounded-lg shadow-lg px-8 py-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Log in to your account</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="border dark:text-black border-gray-400 p-2 w-full rounded-lg"
                            id="username"
                            type="username"
                            placeholder="JohnDoe"
                            value={username} onChange={setUser}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border dark:text-black border-gray-400 p-2 w-full rounded-lg"
                            id="password"
                            type="password"
                            placeholder="********"
                            value={password} onChange={setPass}
                        />
                    </div>
                    <button
                        onClick={e => onSubmit(username, password)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
                <p className="mt-4 text-gray-500 text-sm">
                    Don&apos;t have an account?&nbsp;
                    <Link className="text-blue-500 hover:text-blue-700 font-bold" href="/help">
                        Contact Us
                    </Link>
                </p>
            </div>
        </main>
    );
};
