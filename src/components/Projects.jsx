import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" style={{ padding: '80px 0' }}>
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
              Portfolio
            </span>
            <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>
              Featured Projects
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              A selection of projects that showcase my skills and experience
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}>
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  position: 'relative',
                }}>
                  {project.emoji}
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '4px 10px',
                          background: 'var(--bg-page)',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 500,
                          fontFamily: 'monospace',
                          color: 'var(--accent-primary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                      }}
                    >
                      <GithubIcon size={16} /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                      }}
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
