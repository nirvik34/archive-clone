import React, { useState } from 'react';
import Navbar from '../components/Navbar';  

const AboutPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <>
      <Navbar />
      <div style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#fffdf8',
        padding: '20px 20px',
        color: '#1c1c1c',
        borderRadius: '20px',
      }}>
        <header style={{
          textAlign: 'center',
          padding: '40px 20px',
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1c1c1c'
          }}>
            Find the right <span style={{ color: '#ff5722' }}>archive</span> for you
          </h1>
          <p style={{ fontSize: '18px', marginTop: '15px', color: '#444' }}>
            Preserving history, one click at a time.
          </p>
        </header>

        <section style={{
          maxWidth: '800px',
          margin: '0 auto',
          border:'1px solid black',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.05)',
          padding: '30px',
          textAlign: 'center',
          
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#1c1c1c'
          }}>
            About Us
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#444'
          }}>
            Welcome to our Internet Archive Clone — a home for digital content preservation. We aim to make sure that historical books, videos, audio, and websites are never lost to time. 
            Explore and contribute to keep the legacy of human knowledge alive for future generations.
          </p>
        </section>

        <section style={{
          textAlign: 'center',
          marginTop: '50px'
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Features
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '18px',
            color: '#333'
          }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Filtered Search:</strong> Find what you're looking for faster.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Curated Timelines:</strong> Experience content in historical context.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Open Source:</strong> Join us in preserving digital heritage.
            </li>
          </ul>
        </section>

        <footer style={{
          marginTop: '60px',
          textAlign: 'center',
          backgroundColor: '#ff5722',
          color: 'black',
          padding: '25px',
          borderRadius: '0 0 20px 20px',
        }}>
          <p style={{ margin: 0 ,color:'black'}}>© 2025 Internet Archive Clone</p>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
