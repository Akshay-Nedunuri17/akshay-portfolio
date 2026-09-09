import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            Education
          </span>
          <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>
            Academic Background
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {education.map((edu) => (
            <div
              key={edu.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '28px',
                transition: 'all 0.3s',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--accent-glow)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <GraduationCap size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '6px' }}>
                {edu.degree}
              </h3>
              <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--accent-primary)', marginBottom: '6px' }}>
                {edu.field}
              </div>
              <div style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                {edu.institution}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
              </div>
              {edu.description && (
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
