import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Main content */}
      <div className="hero-content">
        <h1>
          <span className="hello">Hello,</span>
          <br />
          <span className="text-normal">I am </span>
          <span className="name">Maitry Bajracharya</span>
        </h1>

        <div className="hero-tagline">
          <p>UI/UX Designer & Creative Developer</p>
        </div>

        {/* Mobile-only divider */}
        <div className="hero-divider"></div>

        {/* Mobile-only badge */}
        <div className="hero-badge">
          <div className="hero-badge-dot"></div>
          <span className="hero-badge-text">Available for work</span>
        </div>

        {/* Mobile-only scroll hint */}
        <div className="hero-scroll-hint">Scroll to explore</div>
      </div>

      {/* Animated gradient */}
      <div className="hero-gradient"></div>
    </section>
  );
};

export default Hero;
