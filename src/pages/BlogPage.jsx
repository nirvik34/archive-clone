import React from 'react';
import Navbar from '../components/Navbar';

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#f9f6ff',
        padding: '40px 20px',
        minHeight: '100vh',
      }}>
        <header style={{
          background: 'linear-gradient(to right, #ff7043, #ff5722)',
          padding: '40px 20px',
          color: '#ffffff',
          textAlign: 'center',
          borderRadius: '24px',
          marginBottom: '40px',
        }}>
          <h1 style={{ fontSize: '36px', margin: 0 }}>Blog</h1>
          <p style={{ fontSize: '18px', marginTop: '10px',color:'#ffffff' }}>
            Stay updated with the latest news and insights from the archive.
          </p>
        </header>

        <section style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: '#222', marginBottom: '30px' }}>Latest Posts</h2>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            padding: '0 10px',
          }}>
            {[
              {
                title: 'Preserving Digital History: Why It Matters',
                text: 'As digital content continues to grow, preserving it is more important than ever. This post discusses its importance for future generations.',
              },
              {
                title: 'How AI is Shaping the Future of Archives',
                text: 'AI is transforming archives by making them smarter and more accessible. Discover how artificial intelligence is changing the game.',
              },
              {
                title: 'Exploring the Impact of Digital Archives on Education',
                text: 'Digital archives enhance modern education, offering rich, accessible resources. Here’s how they’re reshaping learning.',
              },
            ].map((post, i) => (
              <div key={i} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                padding: '24px',
                textAlign: 'left',
                transition: 'transform 0.3s ease',
              }}>
                <h3 style={{ fontSize: '20px', color: '#ff5722', marginBottom: '12px' }}>{post.title}</h3>
                <p style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>{post.text}</p>
                <a href="#" style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  color: '#ff5722',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                }}>
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={{
          marginTop: '60px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
            Why Contribute to the Archive?
          </h3>
          <p style={{
            fontSize: '18px',
            color: '#555',
            lineHeight: '1.7',
            marginTop: '20px'
          }}>
            The Internet Archive thrives because of people like you. Upload history, give feedback, or help us grow. Be part of the digital preservation movement today!
          </p>
        </section>

        <footer style={{
          background: 'linear-gradient(to right, #ff7043, #ff5722)',
          padding: '24px',
          color: 'black',
          textAlign: 'center',
          borderRadius: '0 0 16px 16px',
          marginTop: '60px'
        }}>
          <p style={{ margin: 0,color: 'black' }}>© 2025 Internet Archive Clone | All rights reserved</p>
        </footer>
      </div>
    </>
  );
};

export default BlogPage;
