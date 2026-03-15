import uiStack from "../assets/ui-stack.png";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="title-normal">My</span>{" "}
            <span className="title-cursive">Projects</span>
          </h2>

          {/* Top right circle decoration */}
          <div className="circle-decoration">
            <div className="circle-inner"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <ProjectCard
            title="Mobile UI Design"
            image={uiStack}
            url="https://www.figma.com/proto/1TYU0lMI2TAD86pkeufURQ/UIUX?node-id=1221-28&t=U2u1sCXTYqE2I9hU-0&scaling=scale-down&content-scaling=fixed&page-id=1060%3A2&starting-point-node-id=1221%3A28&show-proto-sidebar=1"
          />
          <ProjectCard title="Ecommerce Website" image={uiStack} />
        </div>
      </div>

      {/* Animated gradient background */}
      <div className="projects-gradient"></div>
    </section>
  );
}

function ProjectCard({ title, image, url }) {
  const content = (
    <div className="project-card">
      <div className="project-header">{title}</div>

      <div className="mockup-container">
        <div className="mockup-plate">
          <img src={image} alt={title} className="mockup-image" />
        </div>

        <div className="arrow-circle">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M10 30L30 10M30 10H15M30 10V25"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        {content}
      </a>
    );
  }

  return <div className="project-link">{content}</div>;
}
