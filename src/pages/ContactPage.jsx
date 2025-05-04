import React from 'react';
import Navbar from '../components/Navbar';
import bgImage from '../assets/3443123.jpg';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#f9f6ff',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '32px', color: '#ff5722', marginBottom: '20px' }}>
            Contact Info
          </h1>
          <p style={{ fontSize: '18px', color: '#444', marginBottom: '10px' }}>
            <strong>Name:</strong> Nirvik Goswami
          </p>
          <p style={{ fontSize: '18px', color: '#444', marginBottom: '10px' }}>
            <strong>Institute:</strong> VIT Chennai
          </p>
          <p style={{ fontSize: '18px', color: '#444', marginBottom: '10px' }}>
            <strong>Course:</strong> BTech CSE
          </p>
          <p style={{ fontSize: '18px', color: '#444' }}>
            <strong>Email:</strong> nirvikgoswami689@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
