import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Design",
      icon: "figma",
      skills: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    },
    {
      id: 2,
      title: "Frontend",
      icon: "code",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 3,
      title: "Tools",
      icon: "tools",
      skills: ["Git", "VS Code", "Chrome DevTools", "Responsive Design"],
    },
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="title-normal">My</span>{" "}
          <span className="title-cursive">Skills</span>
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="skills-gradient"></div>
    </section>
  );
};

function SkillCard({ category }) {
  return (
    <div className="skill-card">
      {/* Desktop: header on top */}
      <div className="skill-header">
        <h3>{category.title}</h3>
      </div>

      {/* Icon — used on both desktop and mobile */}
      <div className="skill-icon-container">
        {category.icon === "figma" && <FigmaIcon />}
        {category.icon === "code" && <CodeIcon />}
        {category.icon === "tools" && <ToolsIcon />}
      </div>

      {/* Mobile: title + tags side by side with icon */}
      <div className="skill-list-wrapper">
        <span className="skill-card-mobile-title">{category.title}</span>
        <div className="skill-list">
          {category.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: tags at bottom of card */}
      <div className="skill-list skill-list-desktop">
        {category.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Figma — official logo mark */
function FigmaIcon() {
  return (
    <svg
      viewBox="0 0 38 57"
      className="skill-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 28.5C19 24.358 22.358 21 26.5 21C30.642 21 34 24.358 34 28.5C34 32.642 30.642 36 26.5 36C22.358 36 19 32.642 19 28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M4 43.5C4 39.358 7.358 36 11.5 36H19V43.5C19 47.642 15.642 51 11.5 51C7.358 51 4 47.642 4 43.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 6V21H26.5C30.642 21 34 17.642 34 13.5C34 9.358 30.642 6 26.5 6H19Z"
        fill="#FF7262"
      />
      <path
        d="M4 13.5C4 17.642 7.358 21 11.5 21H19V6H11.5C7.358 6 4 9.358 4 13.5Z"
        fill="#F24E1E"
      />
      <path
        d="M4 28.5C4 32.642 7.358 36 11.5 36H19V21H11.5C7.358 21 4 24.358 4 28.5Z"
        fill="#A259FF"
      />
    </svg>
  );
}

/* React logo */
function CodeIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="skill-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Nucleus */}
      <circle cx="50" cy="50" r="6" fill="#61DAFB" />
      {/* Orbit 1 */}
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15"
        stroke="#61DAFB"
        strokeWidth="3"
        fill="none"
      />
      {/* Orbit 2 */}
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15"
        stroke="#61DAFB"
        strokeWidth="3"
        fill="none"
        transform="rotate(60 50 50)"
      />
      {/* Orbit 3 */}
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15"
        stroke="#61DAFB"
        strokeWidth="3"
        fill="none"
        transform="rotate(120 50 50)"
      />
    </svg>
  );
}

/* Git branch icon */
function ToolsIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="skill-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main line */}
      <line
        x1="30"
        y1="20"
        x2="30"
        y2="80"
        stroke="#F05133"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Branch line */}
      <line
        x1="70"
        y1="38"
        x2="70"
        y2="80"
        stroke="#F05133"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Curve connector */}
      <path
        d="M30 30 Q30 20 50 20 Q70 20 70 38"
        stroke="#F05133"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Node circles */}
      <circle cx="30" cy="20" r="7" fill="#F05133" />
      <circle cx="30" cy="80" r="7" fill="#F05133" />
      <circle cx="70" cy="80" r="7" fill="#F05133" />
      <circle cx="70" cy="38" r="7" fill="#F05133" />
      {/* Inner whites */}
      <circle cx="30" cy="20" r="3" fill="white" />
      <circle cx="30" cy="80" r="3" fill="white" />
      <circle cx="70" cy="80" r="3" fill="white" />
      <circle cx="70" cy="38" r="3" fill="white" />
    </svg>
  );
}

export default Skills;
