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

// Real Figma logo mark
function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" className="skill-icon" fill="none">
      <path
        d="M19 28.5C19 24.91 21.91 22 25.5 22C29.09 22 32 24.91 32 28.5C32 32.09 29.09 35 25.5 35C21.91 35 19 32.09 19 28.5Z"
        fill="currentColor"
      />
      <path
        d="M6 28.5C6 24.91 8.91 22 12.5 22H19V35H12.5C8.91 35 6 32.09 6 28.5Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M6 15.5C6 11.91 8.91 9 12.5 9H19V22H12.5C8.91 22 6 19.09 6 15.5Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M19 9H25.5C29.09 9 32 11.91 32 15.5C32 19.09 29.09 22 25.5 22H19V9Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M6 41.5C6 37.91 8.91 35 12.5 35H19V41.5C19 45.09 16.09 48 12.5 48C8.91 48 6 45.09 6 41.5Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

// Clean code brackets icon
function CodeIcon() {
  return (
    <svg viewBox="0 0 80 80" className="skill-icon" fill="none">
      <path
        d="M28 20L8 40L28 60"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 20L72 40L52 60"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 14L36 66"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

// Clean wrench + git branch icon
function ToolsIcon() {
  return (
    <svg viewBox="0 0 80 80" className="skill-icon" fill="none">
      {/* Wrench */}
      <path
        d="M20 18C16 22 16 30 20 34L44 58C46 60 50 60 52 58C54 56 54 52 52 50L28 26C32 22 32 14 28 10C24 6 16 8 14 12L22 20L18 24L10 16C8 20 10 28 14 30"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Git dot top */}
      <circle cx="62" cy="20" r="5" fill="currentColor" opacity="0.6" />
      {/* Git dot mid */}
      <circle cx="62" cy="40" r="5" fill="currentColor" opacity="0.6" />
      {/* Git dot bottom */}
      <circle cx="62" cy="60" r="5" fill="currentColor" opacity="0.6" />
      {/* Git line */}
      <line
        x1="62"
        y1="25"
        x2="62"
        y2="55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Branch curve */}
      <path
        d="M62 40 Q48 40 48 28 Q48 20 56 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export default Skills;
