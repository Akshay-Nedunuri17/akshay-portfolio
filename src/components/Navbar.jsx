import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
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
        <Link to="/" style={{
          fontWeight: 700,
          fontSize: '20px',
          color: 'var(--text-primary)',
          letterSpacing: '-0.5px',
          textDecoration: 'none'
        }}>
          Akshay<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </Link>

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
                <Link
                  to={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    fontSize: '14px',
                    transition: 'color 0.2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </Link>
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
