import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import Particles from './components/Particles'
import Galaxy from './components/Galaxy'

// Lazy load Hyperspeed for better performance
const Hyperspeed = lazy(() => import('./components/Hyperspeed'))

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-pill">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="contact-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        {/* Hyperspeed Background */}
        <Suspense fallback={<div className="hero-background"></div>}>
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [12, 80],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x131318,
                brokenLines: 0x131318,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3
              }
            }}
          />
        </Suspense>
        <div className="hero-content">
          <h2 className="greeting">Hi 👋, I am</h2>
          <h1 className="name">Thakur Sai Prakash Singh</h1>
          <div className="cta-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <span>See Resumé</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="about">
        <div className="galaxy-bg about-galaxy">
          <Galaxy
            glowIntensity={0.25}
            saturation={0.2}
            hueShift={180}
            density={0.8}
            speed={0.6}
          />
        </div>
        <div className="section-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-content">
            <div className="about-image-container">
              <div className="about-image-glow"></div>
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="about-image"
              />
            </div>
            <div className="about-text">
              <p>
                Passionate developer focused on building intelligent, scalable, and user-centered digital solutions. I enjoy transforming complex ideas into seamless, high-performance applications with clean design and strong architecture.
Driven by curiosity and continuous learning, I aim to create technology that solves real-world problems and delivers meaningful impact.
              </p>
              <p>
                Currently doing Bachelor's of technology in Computer Science and Information Technology  from  MLR Institute of Technology.
              </p>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="skills-grid">
            <div className="skill-card">
              <Particles 
                particleCount={50}
                particleSpread={3}
                speed={0.05}
                particleColors={['#3b82f6', '#60a5fa', '#93c5fd']}
                alphaParticles={true}
                particleBaseSize={50}
                sizeRandomness={0.5}
                cameraDistance={15}
                pixelRatio={window.devicePixelRatio || 1}
                className=""
              />
              <h3>Languages</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                  <span>C</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                  <span>C++</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                  <span>Java</span>
                </div>
              </div>
            </div>
            
            
            <div className="skill-card">
              <Particles 
                particleCount={50}
                particleSpread={3}
                speed={0.05}
                particleColors={['#8b5cf6', '#a78bfa', '#c4b5fd']}
                alphaParticles={true}
                particleBaseSize={50}
                sizeRandomness={0.5}
                cameraDistance={15}
                pixelRatio={window.devicePixelRatio || 1}
                className=""
              />
              <h3>Backend & Systems</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                  <span>Express.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon-text">🌐</span>
                  <span>RESTful APIs</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon-text">🔐</span>
                  <span>JWT Authentication</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
                  <span>Flask</span>
                </div>
              </div>
            </div>
            
            <div className="skill-card">
              <Particles 
                particleCount={50}
                particleSpread={3}
                speed={0.05}
                particleColors={['#06b6d4', '#22d3ee', '#67e8f9']}
                alphaParticles={true}
                particleBaseSize={50}
                sizeRandomness={0.5}
                cameraDistance={15}
                pixelRatio={window.devicePixelRatio || 1}
                className=""
              />
              <h3>Frontend</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                  <span>CSS</span>
                </div>
              </div>
            </div>
            
            <div className="skill-card">
              <Particles 
                particleCount={50}
                particleSpread={3}
                speed={0.05}
                particleColors={['#10b981', '#34d399', '#6ee7b7']}
                alphaParticles={true}
                particleBaseSize={50}
                sizeRandomness={0.5}
                cameraDistance={15}
                pixelRatio={window.devicePixelRatio || 1}
                className=""
              />
              <h3>Databases</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                  <span>SQL</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                  <span>Firebase</span>
                </div>
              </div>
            </div>
            
            <div className="skill-card">
              <Particles 
                particleCount={50}
                particleSpread={3}
                speed={0.05}
                particleColors={['#f59e0b', '#fbbf24', '#fcd34d']}
                alphaParticles={true}
                particleBaseSize={50}
                sizeRandomness={0.5}
                cameraDistance={15}
                pixelRatio={window.devicePixelRatio || 1}
                className=""
              />
              <h3>Tools</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                  <span>GitHub</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                  <span>Docker</span>
                </div>
              </div>
            </div>
            
            <div className="skill-card">
              <Particles 
                particleCount={50}
                particleSpread={3}
                speed={0.05}
                particleColors={['#ec4899', '#f472b6', '#f9a8d4']}
                alphaParticles={true}
                particleBaseSize={50}
                sizeRandomness={0.5}
                cameraDistance={15}
                pixelRatio={window.devicePixelRatio || 1}
                className=""
              />
              <h3>Cloud</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  <span>AWS</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud Platform" />
                  <span>Google Cloud Platform (GCP)</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" />
                  <span>Vercel</span>
                </div>
                <div className="skill-item">
                  <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" />
                  <span>Netlify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section" id="projects">
        <div className="galaxy-bg projects-galaxy">
          <Galaxy
            glowIntensity={0.25}
            saturation={0.2}
            hueShift={180}
            density={0.8}
            speed={0.6}
          />
        </div>
        <div className="section-content">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">Here are some of my recent works</p>
          
          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src="deep.png" alt="DeepFake Detection" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                    <a href="https://github.com/ThakurSaiPrakash12/fake" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>DeepFake Detection</h3>
                <p className="project-description">
                 CNN-based deep learning model for real vs fake media classification. Detects facial artifacts using spatial & temporal features with automated frame extraction and preprocessing.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">FLASK</span>
                  <span className="tech-tag">ML</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="chat.png" alt="Project 2" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://chatgram-topaz.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                    <a href="https://github.com/ThakurSaiPrakash12/chatgram" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>ChatGram</h3>
                <p className="project-description">
                  A real-time chat application built with Flask and PostgreSQL. Features include user authentication, message persistence, and a responsive UI.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">REACT</span>
                  <span className="tech-tag">SOCKETS</span>
                  <span className="tech-tag">MONGODB</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="RFP.png" alt="Project 3" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://rfp-client-teal.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                    <a href="https://github.com/ThakurSaiPrakash12/rfp" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Request For Proposal</h3>
                <p className="project-description">
                  A web-based platform that streamlines the entire RFP lifecycle — from publishing and vendor submissions to automated evaluation and analytics. It reduces manual effort, improves transparency, and enables faster, data-driven decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="galaxy-bg contact-galaxy">
          <Galaxy
            glowIntensity={0.25}
            saturation={0.2}
            hueShift={180}
            density={0.8}
            speed={0.6}
          />
        </div>
        <div className="section-content">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">Actively seeking opportunities and open to meaningful collaborations.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/thakur-sai-prakash-singh-86186b24b/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:thakursaiprakashsingh@gmail.com" className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
