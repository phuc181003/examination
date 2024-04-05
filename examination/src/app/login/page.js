'use client';
import { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://frontend-exam.digitalfortress.dev/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log('Access Token:', data.access_token);
            alert(`đăng nhập thành công ${data.access_token}`);
            return response.data;


        } catch (error) {
            console.error('Lỗi khi thực hiện đăng nhập:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl text-zinc-900 font-semibold mb-4">Đăng nhập</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block font-medium text-gray-700 mb-1">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Đăng nhập</button>
            </form>
        </div>
    );
};

export default LoginForm;
