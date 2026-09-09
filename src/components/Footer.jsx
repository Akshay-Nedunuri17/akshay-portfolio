import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0',
      marginTop: '80px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--bg-page)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
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
                width: '40px',
                height: '40px',
                background: 'var(--bg-page)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
              }}
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--bg-page)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
              }}
            >
              <Mail size={20} />
            </a>
          </div>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            margin: 0,
          }}>
            © 2026 {profile.name}. Built with
            <Heart size={14} style={{ color: '#ef4444' }} />
            using React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
