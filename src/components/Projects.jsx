import uiStack from "../assets/ui-stack.png";
import casestudy from "../assets/casestudy.png";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="title-normal">My</span>
            <span className="title-cursive">Projects</span>
          </h2>

          <div className="projects-header-right">
            <a
              href="https://www.figma.com/proto/1TYU0lMI2TAD86pkeufURQ/UIUX?node-id=1539-317&t=8woFhXOYpgeO6Tx2-0&scaling=min-zoom&content-scaling=fixed&page-id=1537%3A359"
              target="_blank"
              rel="noopener noreferrer"
              className="ui-rec-pill"
            >
              <span className="ui-rec-dot" />
              <span className="ui-rec-text">UI Clones</span>
              <svg
                className="ui-rec-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <div className="circle-decoration">
              <div className="circle-inner"></div>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          <ProjectCard
            title="Mobile UI Design"
            image={uiStack}
            url="https://www.figma.com/proto/1TYU0lMI2TAD86pkeufURQ/UIUX?node-id=1221-28&t=U2u1sCXTYqE2I9hU-0&scaling=scale-down&content-scaling=fixed&page-id=1060%3A2&starting-point-node-id=1221%3A28&show-proto-sidebar=1"
          />
          <ProjectCard
            title="Case Study"
            image={casestudy}
            url="https://www.figma.com/proto/1TYU0lMI2TAD86pkeufURQ/UIUX?node-id=1436-249&t=a2lBSgFBQKmx9Sgs-0&scaling=min-zoom&content-scaling=fixed&page-id=242%3A198"
          />
        </div>
      </div>

      <div className="projects-gradient"></div>
    </section>
  );
}

function ProjectCard({ title, image, url }) {
  const content = (
    <div className="project-card">
      <div className="project-header">
        <span className="project-header-title">{title}</span>
      </div>

      <div className="mockup-container">
        <div className="mockup-plate">
          <img src={image} alt={title} className="mockup-image" />
        </div>
        <div className="arrow-circle">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
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
