import { useState } from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 0', background: 'var(--bg-page)' }}>
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
            Get In Touch
          </span>
          <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>
            Let's Connect
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            I'm open to freelance projects, internships, and full-time opportunities
          </p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '40px',
            }}
          >
            {status === 'success' && (
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '16px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--success)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '14px',
                fontWeight: 500,
              }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '16px',
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                fontSize: '14px',
                fontWeight: 500,
              }}>
                ✕ Failed to send message. Please try again or reach out via email directly.
              </div>
            )}

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="name" style={{
                display: 'block',
                fontWeight: 500,
                marginBottom: '8px',
                fontSize: '14px',
              }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="email" style={{
                display: 'block',
                fontWeight: 500,
                marginBottom: '8px',
                fontSize: '14px',
              }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="message" style={{
                display: 'block',
                fontWeight: 500,
                marginBottom: '8px',
                fontSize: '14px',
              }}>
                Message
              </label>
              <textarea
                id="message"
                required
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  minHeight: '120px',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: status === 'sending' ? 'var(--text-muted)' : 'var(--accent-primary)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '8px',
                border: 'none',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
