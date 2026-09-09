import React from 'react';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';

export function ExperiencePage() {
  return (
    <div style={{ minHeight: 'calc(100vh - 70px)' }}>
      <Experience />
      <Education />
    </div>
  );
}
