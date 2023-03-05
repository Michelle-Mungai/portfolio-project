import React from 'react';
import './Landing.css';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Landing = ({ user }) => (
  <div className="App">
    <nav className="navbar">
      <div className="nav-container">
      <a href="/" className="nav-logo">Dezifolio</a>
      </div>
      <div>
      <ul className="nav-menu">
        <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>
      </div>
    </nav>
    <header className="App-header">
      <h1>Welcome to Your Portfolio</h1>
      <p>Here, you can showcase your work and experience to potential clients or employers.</p>
    </header>
    <Projects user={user} />
    <Skills user={user} />
  </div>
)

export default Landing;