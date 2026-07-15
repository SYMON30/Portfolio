import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">Junior DevOps Engineer</p>

          <h1>Symon Abok</h1>

          <p className="lede">
            Building reliable cloud infrastructure and CI/CD pipelines using
            AWS, Kubernetes, Docker, Helm and Linux.
          </p>

          <div className="pill-row">
            <span className="pill">AWS</span>

            <span className="pill">Kubernetes</span>

            <span className="pill">Docker</span>

            <span className="pill">Helm</span>

            <span className="pill">Linux</span>

            <span className="pill">Git</span>

            <span className="pill">CI/CD</span>
            
          </div>

          <div className="btn-row">
            <a
              className="btn btn-primary"
              href="/Symon_Abok_Resume.pdf"
              download
            >
              Download Resume
            </a>

            <a
              className="btn btn-secondary"
              href="https://github.com/SYMON30"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <h2>About</h2>

          <p className="about-text">
            Junior DevOps Engineer with hands-on experience in AWS,
            Kubernetes, Docker, Helm, Linux, ArgoCD and CI/CD pipelines.
            I enjoy automating infrastructure, deploying applications and
            continuously improving cloud environments.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Tech Stack</h2>

          <div className="tech-grid">
            {[
              "AWS",

              "Docker",

              "Kubernetes",

              "Linux",

              "Helm",

              "ArgoCD",

              "Git",

              "Bitbucket",

              "Terraform",

              "CI/CD",

            ].map((tech) => (
              <span key={tech} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Projects</h2>

          <div className="projects">
            <div className="project-card">
              <h3>AWS Three-Tier Architecture</h3>

              <p>
                Designed and deployed a highly available AWS infrastructure
                using EC2, VPC, ALB, Auto Scaling and RDS.
              </p>
            </div>

            <div className="project-card">
              <h3>Kubernetes Deployment</h3>

              <p>
                Managed Kubernetes deployments using Helm charts,
                ArgoCD, ConfigMaps, Secrets and Ingress.
              </p>
            </div>

            <div className="project-card">
              <h3>CI/CD Pipeline</h3>

              <p>
                Worked with Bitbucket Pipelines, Docker and GitOps
                deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Certifications</h2>

          <ul className="cert-list">
            <li>AWS Certified Solutions Architect – Associate</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Contact</h2>

          <div className="contact-links">
            <div>
              <span className="label">Email</span>

              <a href="mailto:symonabok@gmail.com">
                symonabok@gmail.com
              </a>
            </div>

            <div>
              <span className="label">GitHub</span>

              <a
                href="https://github.com/SYMON30"
                target="_blank"
                rel="noreferrer"
              >
                github.com/SYMON30
              </a>
            </div>

            <div>
              <span className="label">LinkedIn</span>

              <a
                href="https://linkedin.com/in/symon-abok-65a4101bb"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/symon-abok-65a4101bb
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2026 Symon Abok</footer>
    </div>
  );
}

export default App;