
export default function Home() {
  return (
    <>
      <header className="wrap nav">
        <a className="brand" href="#home">
          <span className="monogram">SD</span>
          <span>
            Sampurna Datta<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        <nav className="navlinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="wrap" id="home">
        <div className="hero">
          <div>
            <div className="glass-location">
              <span aria-hidden="true">⌖</span>
              <span>Kolkata, India</span>
            </div>

            <h1>
              Hi, I&apos;m Sam.
              <br />
              <span>I build things</span>
              <br />
              with code.
            </h1>

            <p>
              Computer Science Engineering student, interested in AI/ML,
              cybersecurity, and cryptography. Love to research and explore
              new things.
            </p>

            <div className="actions">
              <a className="btn primary" href="#projects">
                Explore my work ↘
              </a>
              <a className="btn" href="mailto:dattasam290@gmail.com">
                Get in touch ↗
              </a>
            </div>

            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="textlink"
                href="https://www.linkedin.com/in/sampurna-datta-31109331a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="textlink"
                href="https://github.com/Samziii"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <aside className="profilecard">
            <img
              className="avatar"
              src="/sampurna.jpg"
              alt="Sampurna Datta"
            />
          </aside>
        </div>

        <section id="about">
          <div className="sectionhead">
            <div>
              <div className="kicker">01 / About</div>
              <h2>A little about me</h2>
            </div>
          </div>

          <div className="card">
            <p style={{ fontSize: 15, margin: 0 }}>
              I&apos;m Sampurna Datta, a Computer Science Engineering student
              at IEM Kolkata. My interests span artificial intelligence and
              machine learning, cybersecurity, and cryptography. I like
              exploring practical ideas through projects, collaborating with
              others, and understanding how technology can solve real problems.
            </p>
          </div>
        </section>

        <section id="experience">
          <div className="sectionhead">
            <div>
              <div className="kicker">02 / Experience</div>
              <h2>Where I&apos;ve contributed</h2>
            </div>
          </div>

          <div className="timeline">
            <article className="card">
              <div className="role">
                <div>
                  <h3>Summer Intern</h3>
                  <div className="org">Chrysalis · IEMRF</div>
                </div>
                <div className="date">May – July 2026</div>
              </div>

              <p>
                Contributed to innovative product development across
                industries, working with machine-learning models and tools
                including PyTorch, TensorFlow, Edge Impulse, and Arduino IDE.
              </p>

              <div className="tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">PyTorch</span>
                <span className="tag">TensorFlow</span>
                <span className="tag">Edge Impulse</span>
              </div>
            </article>

            <article className="card">
              <div className="role">
                <div>
                  <h3>Campus Ambassador</h3>
                  <div className="org">Indian Institute of Internship</div>
                </div>
                <div className="date">Jan – Oct 2025</div>
              </div>

              <p>
                Led student outreach and engagement to promote internship
                opportunities, supporting communication and campus brand
                advocacy.
              </p>

              <div className="tags">
                <span className="tag">Outreach</span>
                <span className="tag">Communication</span>
                <span className="tag">Engagement</span>
              </div>
            </article>
          </div>
        </section>

        <section id="projects">
          <div className="sectionhead">
            <div>
              <div className="kicker">03 / Selected work</div>
              <h2>Projects &amp; research</h2>
            </div>
            <div className="hint">A few things I&apos;ve worked on</div>
          </div>

          <div className="grid">
            <article className="card">
              <div className="cardtop">
                <h3>Rahee Navigation App</h3>
                <span className="award">2nd Place · IEEE CS</span>
              </div>

              <p>
                AI-assisted navigation concept for Indian commuters, tourists,
                teens, and elderly users. Focuses on multilingual assistance
                and adaptive route planning based on cost, speed, and user
                preferences.
              </p>

              <div className="tags">
                <span className="tag">Navigation</span>
                <span className="tag">AI-assisted</span>
                <span className="tag">Accessibility</span>
              </div>
            </article>

            <article className="card">
              <div className="cardtop">
                <h3>Emotion-Aware Live Captions</h3>
                <span className="symbol">↗</span>
              </div>

              <p>
                A project exploring live captions for online meetings with
                emotion tags to add conversational context for Deaf and
                hard-of-hearing users.
              </p>

              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Speech Recognition</span>
                <span className="tag">NLP</span>
                <span className="tag">Computer Vision</span>
                <span className="tag">FastAPI</span>
              </div>
            </article>

            <article className="card">
              <div className="cardtop">
                <h3>How Passwords Are Stored and Secured</h3>
                <span className="symbol">⌘</span>
              </div>

              <p>
                Independent research on cryptographic techniques used in
                secure password storage, presented at a National University
                of Singapore conference.
              </p>

              <div className="tags">
                <span className="tag">Cryptography</span>
                <span className="tag">Cybersecurity</span>
                <span className="tag">Research</span>
              </div>
            </article>

            <article className="card">
              <div className="cardtop">
                <h3>NCRYPT — Post-Quantum Migration Analysis Tool</h3>
                <span className="symbol">⌘</span>
              </div>

              <p>
                An Enterprise Cryptographic Discovery &amp; Analysis Tool
                concept for identifying cryptographic assets across source
                code, binaries, libraries, and infrastructure. It explores
                quantum-risk assessment and recommendations for post-quantum
                cryptography migration.
              </p>

              <div className="tags">
                <span className="tag">Cybersecurity</span>
                <span className="tag">Cryptography</span>
                <span className="tag">Post-Quantum Cryptography</span>
                <span className="tag">Static Analysis</span>
              </div>
            </article>

            <article className="card">
              <div className="cardtop">
                <h3>SurakshChain</h3>
                <span className="symbol">↗</span>
              </div>

              <p>
                A blockchain-based micro-insurance concept exploring accessible
                insurance enrollment and faster payouts triggered by verified
                weather and satellite data during disasters. The proposed
                approach includes access through UPI, WhatsApp, SMS, and IVR.
              </p>

              <div className="tags">
                <span className="tag">Blockchain</span>
                <span className="tag">Smart Contracts</span>
                <span className="tag">Parametric Insurance</span>
                <span className="tag">Weather Data</span>
              </div>
            </article>
          </div>
        </section>

        <section id="skills">
          <div className="sectionhead">
            <div>
              <div className="kicker">04 / Toolkit</div>
              <h2>Skills I&apos;m building on</h2>
            </div>
          </div>

          <div className="skills">
            <div className="skillbox">
              <h3>Programming</h3>
              <p>Python · Java · C · SQL</p>
            </div>

            <div className="skillbox">
              <h3>Computer Science</h3>
              <p>OOP · DSA · DBMS · Cryptography</p>
            </div>

            <div className="skillbox">
              <h3>Tools</h3>
              <p>Git · GitHub · MySQL · VS Code</p>
            </div>

            <div className="skillbox">
              <h3>Areas of Interest</h3>
              <p>AI/ML · Cybersecurity · Secure Computing</p>
            </div>

            <div className="skillbox">
              <h3>Collaboration</h3>
              <p>Problem solving · Analytical thinking · Communication</p>
            </div>

            <div className="skillbox">
              <h3>Leadership</h3>
              <p>Public speaking · Teamwork · Event coordination</p>
            </div>
          </div>
        </section>

        <section id="certifications">
          <div className="sectionhead">
            <div>
              <div className="kicker">05 / Professional development</div>
              <h2>Certifications &amp; Learning</h2>
            </div>
            <div className="hint">
              Courses, training &amp; technical learning
            </div>
          </div>

          <div className="grid">
            <article className="card">
              <h3>Machine Learning Training &amp; Internship</h3>
              <div className="meta">
                SmartEd Innovations · Dec 2025
              </div>
              <div className="tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Training</span>
              </div>
            </article>

            <article className="card">
              <h3>AI, IoT, ML &amp; Data Analytics</h3>
              <div className="meta">
                NUS Singapore Study-Abroad Internship Programme · Jun 2025
              </div>
              <div className="tags">
                <span className="tag">Artificial Intelligence</span>
                <span className="tag">IoT</span>
                <span className="tag">Data Analytics</span>
              </div>
            </article>

            <article className="card">
              <h3>Cyber Security Fundamentals</h3>
              <div className="meta">
                University of London · Coursera · Oct 2025
              </div>
              <div className="tags">
                <span className="tag">Cybersecurity</span>
                <span className="tag">Security Fundamentals</span>
              </div>
            </article>

            <article className="card">
              <h3>Advanced System Security Design</h3>
              <div className="meta">
                University of Colorado System · Coursera · Oct 2025
              </div>
              <div className="tags">
                <span className="tag">System Security</span>
                <span className="tag">Security Design</span>
              </div>
            </article>
          </div>
        </section>

        <section id="leadership">
          <div className="sectionhead">
            <div>
              <div className="kicker">07 / Beyond code</div>
              <h2>Leadership &amp; recognition</h2>
            </div>
          </div>

          <div className="grid">
            <article className="card">
              <h3>IEEE Computer Society · Converge</h3>
              <div className="meta">2nd Position · Rahee Navigation App</div>
              <p>
                Recognition for the navigation app project at a technical
                event.
              </p>
            </article>

            <article className="card">
              <h3>IEM MUN</h3>
              <div className="meta">Cultural &amp; Hospitality Domain Lead</div>
              <p>
                Supported delegate engagement, event coordination, and
                cross-functional execution.
              </p>
            </article>

            <article className="card">
              <h3>Oratoria · IEM Debating Society</h3>
              <div className="meta">Active Member</div>
              <p>
                Building public speaking, analytical reasoning, and structured
                argumentation skills.
              </p>
            </article>
          </div>
        </section>

        <section id="education">
          <div className="sectionhead">
            <div>
              <div className="kicker">08 / Education</div>
              <h2>Education</h2>
            </div>
          </div>

          <div className="timeline">
            <article className="card edu">
              <div>
                <h3>Institute of Engineering &amp; Management</h3>
                <p>B.Tech, Computer Science Engineering · Kolkata</p>
              </div>
              <time>Jul 2024 – Jun 2028</time>
            </article>

            <article className="card edu">
              <div>
                <h3>Mahadevi Birla World Academy</h3>
                <p>Higher Secondary Education · Science</p>
              </div>
              <time>2022 – 2024</time>
            </article>
          </div>
        </section>

       
        <section id="contact">
          <div
            className="contact"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 20,
            }}
          >
            <div>
              <div className="kicker">Have a project in mind?</div>
              <h2>Let&apos;s connect.</h2>
              <p>
                For collaborations, opportunities, or a simple tech
                conversation.
              </p>
            </div>

            <a className="btn primary" href="mailto:dattasam290@gmail.com">
              dattasam290@gmail.com ↗
            </a>
          </div>
        </section>


        <footer className="footer">
          <span>© 2026 Sampurna Datta · Portfolio preview</span>
        </footer>
      </main>
    </>
  );
}
