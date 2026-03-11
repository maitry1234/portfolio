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
      </div>

      {/* Animated gradient background */}
      <div className="hero-gradient"></div>
    </section>
  );
};

export default Hero;
