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
          <span className="title-cursive">skills</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Animated gradient background */}
      <div className="skills-gradient"></div>
    </section>
  );
};

function SkillCard({ category }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <h3>{category.title}</h3>
      </div>

      <div className="skill-icon-container">
        {category.icon === "figma" && <FigmaIcon />}
        {category.icon === "code" && <CodeIcon />}
        {category.icon === "tools" && <ToolsIcon />}
      </div>

      <div className="skill-list">
        {category.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Icon Components
function FigmaIcon() {
  return (
    <svg viewBox="0 0 200 300" className="skill-icon">
      <rect x="50" y="50" width="50" height="50" rx="25" fill="currentColor" />
      <rect x="100" y="50" width="50" height="50" rx="25" fill="currentColor" />
      <rect x="50" y="100" width="50" height="50" rx="25" fill="currentColor" />
      <circle cx="125" cy="125" r="25" fill="currentColor" />
      <path
        d="M 75 150 Q 75 175 75 175 Q 75 200 100 200 Q 125 200 125 175 Q 125 150 100 150 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 200 300" className="skill-icon">
      <path
        d="M 60 100 L 90 130 L 60 160"
        stroke="currentColor"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 140 100 L 110 130 L 140 160"
        stroke="currentColor"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="95"
        y1="90"
        x2="105"
        y2="170"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 200 300" className="skill-icon">
      <rect x="70" y="60" width="20" height="80" rx="5" fill="currentColor" />
      <circle cx="80" cy="50" r="12" fill="currentColor" />
      <path
        d="M 100 100 L 130 70 Q 140 60 150 70 L 170 90 Q 180 100 170 110 L 140 140 Q 130 150 120 140 Z"
        fill="currentColor"
      />
      <rect
        x="100"
        y="140"
        width="60"
        height="15"
        rx="7"
        transform="rotate(45 130 147)"
        fill="currentColor"
      />
    </svg>
  );
}

export default Skills;
