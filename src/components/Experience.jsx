import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 0', background: 'var(--bg-page)' }}>
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
            Journey
          </span>
          <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>
            Experience
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            My professional experience and learning path
          </p>
        </div>

        {experience.length > 0 ? (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                style={{
                  position: 'relative',
                  paddingLeft: '40px',
                  paddingBottom: index < experience.length - 1 ? '48px' : 0,
                }}
              >
                {index < experience.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '7px',
                    top: '8px',
                    bottom: '-16px',
                    width: '2px',
                    background: 'var(--border)',
                  }} />
                )}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '8px',
                  width: '16px',
                  height: '16px',
                  background: 'var(--accent-primary)',
                  border: '3px solid var(--bg-page)',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 3px var(--accent-glow)',
                }} />
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '24px',
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>
                    {exp.company}
                  </div>
                  <div style={{
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '12px',
                  }}>
                    <Calendar size={14} />
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        style={{
                          position: 'relative',
                          paddingLeft: '20px',
                          marginBottom: '8px',
                          color: 'var(--text-secondary)',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--accent-primary)',
                          fontWeight: 'bold',
                        }}>▹</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '64px 24px',
            background: 'var(--bg-card)',
            border: '2px dashed var(--border)',
            borderRadius: '12px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <Briefcase size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Building Experience</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Currently focused on learning and building projects to develop my skills as a Full Stack Developer.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
