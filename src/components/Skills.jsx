import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';
import { skills } from '../data/skills';

const iconMap = {
  Code: Code,
  Server: Server,
  Wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 0', background: 'var(--bg-page)' }}>
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
            Technical Skills
          </span>
          <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>
            What I work with
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {Object.values(skills).map((category) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div
                key={category.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  transition: 'all 0.3s',
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <Icon size={22} style={{ color: 'var(--accent-primary)' }} />
                  {category.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.items.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        padding: '6px 12px',
                        background: 'var(--bg-page)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s',
                        cursor: 'default',
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
