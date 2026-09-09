import React from 'react';
import { Send, ArrowRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <section id="about" style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div style={{ maxWidth: '760px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'var(--accent-glow)',
            color: 'var(--accent-primary)',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '24px',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--success)',
              borderRadius: '50%',
              display: 'inline-block',
            }} />
            {profile.availability}
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1px',
          }}>
            Hi, I'm {profile.name}.<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {profile.title}
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px, 2.5vw, 20px)',
            color: 'var(--text-secondary)',
            marginBottom: '36px',
            lineHeight: 1.7,
          }}>
            {profile.bio}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--accent-primary)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(14, 165, 233, 0.35)',
                transition: 'all 0.2s',
              }}
            >
              <Send size={16} /> Get in touch
            </a>

            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                transition: 'all 0.2s',
              }}
            >
              View projects <ArrowRight size={16} />
            </a>

            <div style={{ display: 'flex', gap: '12px', marginLeft: '8px' }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
