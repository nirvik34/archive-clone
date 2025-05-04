import React, { useState } from 'react';
import bgImage from '../assets/5342597.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    alert(`Logged in with ${email}`);
    // Implement login logic here
  };

  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#f9f6ff',
      backgroundImage: `url(${bgImage})`,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        maxWidth: '420px',
        width: '100%',
        padding: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '32px', color: '#222', marginBottom: '10px' }}>Welcome Back</h1>
        <p style={{ color: '#555', fontSize: '16px', marginBottom: '30px' }}>
          Please log in to your archive account.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              borderRadius: '12px',
              border: '1.5px solid #ccc',
              marginBottom: '20px',
              outline: 'none',
              transition: '0.3s',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              borderRadius: '12px',
              border: '1.5px solid #ccc',
              marginBottom: '30px',
              outline: 'none',
              transition: '0.3s',
            }}
          />
          <button
            type="submit"
            style={{
              background: 'linear-gradient(to right, #ff7043, #ff5722)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
              border: 'none',
              padding: '14px 0',
              borderRadius: '12px',
              width: '100%',
              cursor: 'pointer',
              transition: '0.3s',
              border:'1.5px solid black'
            }}
          >
            Log In
          </button>
        </form>
      </div>

      <p style={{ marginTop: '30px', color: 'black' }}>© 2025 Internet Archive Clone</p>
    </div>
  );
};

export default LoginPage;
