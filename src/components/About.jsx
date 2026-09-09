import React from 'react';
import { MapPin, Mail, Sparkles, Terminal } from 'lucide-react';
import { profile } from '../data/profile';

export function About() {
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: 'var(--accent-glow)',
              color: 'var(--accent-primary)',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '16px',
            }}>
              Background
            </span>
            <h2 style={{ fontSize: '32px', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Turning ideas into scalable, responsive applications
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.7 }}>
              I enjoy solving complex technical challenges and building intuitive user interfaces. My core focus is on standard clean code, reusable architectures, and optimal performance across frontend and backend.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <MapPin size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>Location: {profile.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>Email: {profile.email}</span>
              </div>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Terminal size={22} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Quick Highlights</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Proficient with modern JavaScript (ES6+) and React ecosystems',
                'Experience building RESTful APIs with Node.js and Express',
                'Database design and indexing with MongoDB',
                'Responsive design with clean CSS and Tailwind',
              ].map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.5,
                }}>
                  <Sparkles size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
