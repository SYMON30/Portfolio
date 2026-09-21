import { useState } from "react";
import profileImage from "./assets/images/profile.png";
import "./index.css";

const skills = [
  { group: "Cloud", items: ["AWS", "EC2", "VPC", "ECR", "IAM", "RDS"] },
  { group: "Containers", items: ["Docker", "Kubernetes", "Helm", "ArgoCD", "kind"] },
  { group: "Automation", items: ["Terraform", "GitHub Actions", "Bitbucket Pipelines", "Git"] },
  { group: "Systems", items: ["Linux", "Bash", "Python", "Grafana", "Nginx"] },
];

const projects = [
  {
    number: "01",
    title: "AWS EKS Platform with Terraform",
    description:
      "Built a reusable Kubernetes platform from local validation to AWS, including a two-AZ network module, EKS infrastructure and automated Terraform quality checks.",
    highlights: ["Reusable Terraform modules", "Local validation with kind", "VPC across two availability zones"],
    tags: ["Terraform", "AWS EKS", "Kubernetes", "TFLint"],
    link: "https://github.com/SYMON30/aws-kubernetes-platform",
  },
  {
    number: "02",
    title: "EKS + ArgoCD GitOps Delivery",
    description:
      "Containerized a Flask application and created a delivery path from GitHub Actions to Amazon ECR, Helm and Kubernetes—with secure, short-lived AWS authentication.",
    highlights: ["GitHub OIDC—no stored AWS keys", "Immutable SHA image tags", "Helm-based Kubernetes deployment"],
    tags: ["ArgoCD", "Helm", "ECR", "GitHub Actions"],
    link: "https://github.com/SYMON30/eks-argocd-gitops",
  },
  {
    number: "03",
    title: "Flask CI/CD to Amazon ECR",
    description:
      "Designed a CI/CD workflow that validates a Python application, builds its Docker image and publishes it to ECR using GitHub-to-AWS identity federation.",
    highlights: ["Automated Python validation", "Docker build and registry push", "IAM trust-policy troubleshooting"],
    tags: ["Python", "Docker", "AWS IAM", "CI/CD"],
    link: "https://github.com/SYMON30/devops-demo",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <nav className="nav" aria-label="Primary navigation">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Symon Abok, home">
            SA<span>.</span>
          </a>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#credentials" onClick={closeMenu}>Credentials</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
          </div>
        </div>
      </nav>

      <main>
        <header className="hero" id="top">
          <div className="hero-glow" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Junior DevOps Engineer · Nairobi, Kenya</p>
              <h1>I build cloud systems that are <em>reliable by design.</em></h1>
              <p className="lede">
                Hands-on with AWS infrastructure, Kubernetes platforms and secure CI/CD—turning code into repeatable, observable deployments.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="#projects">Explore my work <ArrowIcon /></a>
                <a className="btn btn-secondary" href="https://github.com/SYMON30" target="_blank" rel="noreferrer">View GitHub</a>
              </div>
              <div className="availability"><span /> Open to Junior DevOps and cloud opportunities</div>
            </div>

            <div className="hero-visual" aria-label="Portrait of Symon Abok">
              <div className="portrait-frame">
                <img src={profileImage} alt="Symon Abok" />
              </div>
              <div className="floating-card card-top">
                <span className="card-icon">✓</span>
                <div><small>CERTIFIED</small><strong>AWS Cloud Practitioner</strong></div>
              </div>
              <div className="floating-card card-bottom">
                <span className="terminal">$</span>
                <code>terraform apply</code>
              </div>
            </div>
          </div>
        </header>

        <section className="stats" aria-label="Key experience">
          <div className="wrap stats-grid">
            <div><strong>3+</strong><span>End-to-end projects</span></div>
            <div><strong>AWS</strong><span>Certified practitioner</span></div>
            <div><strong>5 yrs</strong><span>Customer-focused experience</span></div>
            <div><strong>IaC</strong><span>Repeatable infrastructure</span></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="wrap about-grid">
            <div>
              <p className="section-kicker">01 / About</p>
              <h2>Operations mindset.<br /><span>Engineering discipline.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I&apos;m transitioning from five years in customer operations into DevOps, bringing the ownership, calm troubleshooting and clear communication that reliable systems demand.
              </p>
              <p>
                My recent work covers AWS networking and EKS, container delivery with Docker and Helm, infrastructure as code with Terraform, and secure CI/CD using GitHub Actions and OIDC. I learn by building, breaking, diagnosing and documenting real systems.
              </p>
              <div className="principles">
                <span>Automate repeatable work</span>
                <span>Secure by default</span>
                <span>Learn from every failure</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="section-kicker">02 / Toolkit</p><h2>Technologies I use</h2></div>
              <p>Tools I have used to provision infrastructure, ship applications and investigate system behavior.</p>
            </div>
            <div className="skill-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.group}>
                  <span className="skill-number">0{index + 1}</span>
                  <h3>{skill.group}</h3>
                  <div className="tag-list">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="section-kicker">03 / Selected work</p><h2>Built, tested, documented.</h2></div>
              <p>Practical projects focused on automation, delivery security and Kubernetes operations.</p>
            </div>
            <div className="projects">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top"><span>{project.number}</span><span className="project-status">Completed</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                    View repository <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="section credentials-section">
          <div className="wrap credential-grid">
            <div>
              <p className="section-kicker">04 / Credentials</p>
              <h2>Certified knowledge.<br /><span>Applied in practice.</span></h2>
            </div>
            <div className="credential-cards">
              <article>
                <div className="aws-mark">aws</div>
                <div><small>AMAZON WEB SERVICES</small><h3>AWS Certified Cloud Practitioner</h3><p>Cloud concepts · Security · Technology · Billing</p></div>
              </article>
              <article>
                <div className="learning-mark">→</div>
                <div><small>CURRENT LEARNING PATH</small><h3>AWS Solutions Architect – Associate</h3><p>Designing resilient, secure and cost-aware architectures</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="wrap contact-inner">
            <p className="section-kicker">05 / Contact</p>
            <h2>Let&apos;s build something<br /><span>reliable together.</span></h2>
            <p>I&apos;m open to junior DevOps, cloud and platform engineering opportunities where I can contribute, learn and grow.</p>
            <a className="email-link" href="mailto:symonabok@gmail.com">symonabok@gmail.com <ArrowIcon /></a>
            <div className="social-links">
              <a href="https://github.com/SYMON30" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/symon-abok-65a4101bb" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="wrap"><span>© 2026 Symon Abok</span><span>Designed with intent. Deployed with care.</span></div></footer>
    </div>
  );
}

export default App;
