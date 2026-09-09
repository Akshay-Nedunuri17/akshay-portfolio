import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '16px',
        paddingBottom: '16px',
      }}>
        <a href="#" style={{
          fontWeight: 700,
          fontSize: '20px',
          color: 'var(--text-primary)',
          letterSpacing: '-0.5px'
        }}>
          Akshay<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <ul style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }} className="desktop-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'var(--bg-page)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              transition: 'all 0.2s',
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
