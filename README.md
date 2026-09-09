# Akshay's Portfolio

A modern, professional portfolio website built with React.js for showcasing projects, skills, and professional profile.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Professional Layout** - Clean, modern design optimized for recruiters
- **Project Showcase** - Detailed project cards with modal views
- **Skills Section** - Categorized technical skills with proficiency levels
- **Contact Form** - Ready to connect with email services
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessible** - WCAG-compliant with keyboard navigation

## 📁 Project Structure

```
akshay-portfolio/
├── public/
│   └── assets/
│       └── Akshay-Resume.pdf    # Place your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with theme toggle
│   │   ├── Hero.jsx             # Hero section with introduction
│   │   ├── About.jsx            # About section
│   │   ├── Skills.jsx           # Technical skills
│   │   ├── Projects.jsx         # Project cards
│   │   ├── ProjectModal.jsx     # Detailed project view
│   │   ├── Experience.jsx       # Work experience
│   │   ├── Education.jsx        # Education & certifications
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer
│   ├── data/
│   │   ├── profile.js           # Your personal information
│   │   ├── skills.js            # Your technical skills
│   │   ├── projects.js          # Your projects
│   │   ├── experience.js        # Work experience
│   │   ├── education.js         # Education details
│   │   └── certifications.js    # Certifications
│   ├── hooks/
│   │   ├── useTheme.js          # Theme management
│   │   └── useScrollSpy.js      # Active section detection
│   ├── styles/
│   │   └── globals.css          # Global styles and variables
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template with SEO
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Navigate to the project directory:**
   ```bash
   cd akshay-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will run at `http://localhost:5173`

## ✏️ Personalization Guide

### 1. Update Your Profile Information

Edit `src/data/profile.js`:
```javascript
const profile = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  resume: '/assets/Akshay-Resume.pdf',
  // ... update all fields
};
```

### 2. Add Your Projects

Edit `src/data/projects.js`:
- Update existing projects with your actual project details
- Add new projects by copying the template
- Replace `'#'` in `github` and `demo` with actual URLs

### 3. Update Your Skills

Edit `src/data/skills.js`:
- Adjust proficiency levels honestly
- Add or remove technologies
- Reorganize categories as needed

### 4. Add Experience

Edit `src/data/experience.js`:
- Add your internships and work experience
- If empty, the section shows a message about building experience

### 5. Add Education

Edit `src/data/education.js`:
- Add your degree, university, and duration
- Include relevant coursework if applicable

### 6. Add Certifications

Edit `src/data/certifications.js`:
- Add any certifications you've earned
- Include credential URLs if available

### 7. Add Your Resume

Place your resume PDF in `public/assets/` and name it exactly as specified in `profile.js` (default: `Akshay-Resume.pdf`)

### 8. Connect the Contact Form

The contact form is currently a placeholder. To enable it:

**Option 1: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. In `src/components/Contact.jsx`, replace the `handleSubmit` function:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('submitting');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  } catch (error) {
    alert('Failed to send message. Please try again.');
    setStatus('idle');
  }
};
```

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install EmailJS: `npm install @emailjs/browser`
3. Follow their React integration guide

**Option 3: Custom Backend**
Build your own API endpoint with Node.js/Express

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** - Vercel will detect Vite automatically

**Or deploy via GitHub:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

**Or via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create a new Static Site
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --accent-primary: #38bdf8;  /* Change primary color */
  --accent-secondary: #818cf8; /* Change secondary color */
  /* ... other variables */
}
```

### Fonts

The project uses system fonts by default. To add custom fonts:
1. Import from Google Fonts in `index.html`
2. Update `--font-sans` in `globals.css`

## 🔍 SEO Checklist

- ✅ Update `<title>` in `index.html`
- ✅ Update meta descriptions in `index.html`
- ✅ Add Open Graph image (create and reference in meta tags)
- ✅ Add favicon (replace `/vite.svg` in `index.html`)
- ✅ Submit sitemap to Google Search Console after deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Support

If you encounter issues:
1. Make sure all dependencies are installed: `npm install`
2. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Check that you're using Node.js v16 or higher: `node --version`

## 📄 License

This project is open source and available for personal use.

---

**Built with React + Vite**

Good luck with your job search! 🚀
