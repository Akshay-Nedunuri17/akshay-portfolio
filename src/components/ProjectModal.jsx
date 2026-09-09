import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export function ProjectModal({ project, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000,
        padding: '24px',
        overflowY: 'auto',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'modalSlideIn 0.3s ease-out',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-page)',
            border: '1px solid var(--border)',
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <X size={18} />
        </button>

        <div style={{
          width: '100%',
          height: '280px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '64px',
          borderRadius: '16px 16px 0 0',
        }}>
          {project.emoji}
        </div>

        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
            {project.longDescription}
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>
            Key Features
          </h3>
          <ul style={{ listStyle: 'none', marginBottom: '24px', padding: 0 }}>
            {project.features.map((feature, index) => (
              <li
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '24px',
                  marginBottom: '8px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--success)',
                  fontWeight: 'bold',
                }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>
            Technologies Used
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 12px',
                  background: 'var(--bg-page)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 500,
                  fontFamily: 'monospace',
                  color: 'var(--accent-primary)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
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
                border: 'none',
              }}
            >
              <GithubIcon size={16} /> View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
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
              }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
