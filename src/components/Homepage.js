import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const events = [
    { title: 'Annual Showcase' },
    { title: 'Code & Hackathon' },
    { title: 'Cultural Fest' },
    { title: 'Sports Meet' },
  ];

  return (
    <div className="homepage" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      {/* Header Section */}
      <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', backgroundColor: '#9b111e', color: '#ffffff' }}>
        <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>KLE TECH</div>
        <nav className="navigation" aria-label="Main Navigation">
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              <Link to="#clubs" style={{ color: 'white', textDecoration: 'none' }}>Clubs</Link> {/* Updated link */}
            </li>
            <li style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              <Link to="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
            </li>
            <li style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
            </li>
            <li style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              <Link to="/feedback" style={{ color: 'white', textDecoration: 'none' }}>Feedback</Link>
            </li>
            <li style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
            </li>
          </ul>
        </nav>
        <div className="search-box">
          <input type="text" placeholder="Search..." aria-label="Search box" style={{ width: '200px', padding: '8px 10px', border: '2px solid #ecc6ca', borderRadius: '5px', outline: 'none', fontSize: '16px', color: 'rgba(155, 17, 30, 0.6)' }} />
        </div>
      </header>

      <div className="border-bar" style={{ width: '100%', height: '5px', backgroundColor: '#9b111e', margin: '10px 0' }}></div>
      {/* Clubs Section */}
      <section id="clubs" className="clubs-section" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '24px', color: '#9b111e', margin: '20px 0', textAlign: 'center' }}>Clubs</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
          {/* Drama Club Box */}
          <Link to="/drama" style={{ textDecoration: 'none' }}>
            <div style={{ width: '250px', padding: '20px', backgroundColor: '#FAF0F1', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer' }}>
              <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>Drama Club</h3>
              <p style={{ fontSize: '14px', color: '#6c757d' }}>Bringing Stories to Life: Acting, Expression, and Creativity</p>
            </div>
          </Link>

          {/* UPSC Club Box */}
          <Link to="/upsc" style={{ textDecoration: 'none' }}>
            <div style={{ width: '250px', padding: '20px', backgroundColor: '#FAF0F1', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer' }}>
              <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>UPSC Club</h3>
              <p style={{ fontSize: '14px', color: '#6c757d' }}>Empowering Aspirants, Shaping Future Leaders</p>
            </div>
          </Link>

          {/* Music Club Box */}
          <Link to="/aerokle" style={{ textDecoration: 'none' }}>
            <div style={{ width: '250px', padding: '20px', backgroundColor: '#FAF0F1', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer' }}>
              <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>Aerokle Club</h3>
              <p style={{ fontSize: '14px', color: '#6c757d' }}>Explores aerospace and mechanical engineering concepts.</p>
            </div>
          </Link>

          {/* Code Club Box */}
          <Link to="/code" style={{ textDecoration: 'none' }}>
            <div style={{ width: '250px', padding: '20px', backgroundColor: '#FAF0F1', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer' }}>
              <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>Code Club</h3>
              <p style={{ fontSize: '14px', color: '#6c757d' }}>Turning Ideas into Applications: Learn, Build, Innovate</p>
            </div>
          </Link>
        </div>
      </section>
      {/* Events Section */}
      <section className="events-section" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '24px', color: '#9b111e', margin: '20px 0', textAlign: 'center' }}>Upcoming Events</h2>
        <div className="horizontal-scroll" style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '10px 0' }}>
          {events.map((event, index) => (
            <div className="event-card" key={index} style={{ flex: '0 0 auto', minWidth: '150px', padding: '15px', backgroundColor: '#faf0f1', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center', color: '#9b111e', fontWeight: 'bold' }}>
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Page Section */}
      <section className="why-page" style={{ margin: '20px auto', padding: '20px', backgroundColor: '#faf0f1', borderRadius: '10px', color: '#9b111e', fontSize: '18px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '24px', color: '#9b111e', margin: '20px 0', textAlign: 'center' }}>Why This Page?</h2>
        <p>
          The Campus Club Registration and Events Management System is a platform that connects
          students with campus clubs and events. It allows students to explore clubs, register for
          events, and stay updated on campus activities. With features like QR codes for easy event
          entry and feedback options, the system simplifies student engagement and fosters a connected
          campus community. This tool helps students discover new interests, join communities, and
          make the most of their college experience.
        </p>
      </section>

      
    </div>
  );
}

export default Homepage;
