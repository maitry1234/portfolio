import profile from "../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="handwritten">About me</h2>

        <p>
          I’ve always been drawn to <span>UI/UX</span> and
          <span> Product design</span> fascinated by how thoughtful,
          user-centered solutions shape digital experiences.
        </p>

        <p>
          I work with Figma and front-end basics like HTML, CSS, and JavaScript,
          and I’m currently exploring React. A music enthusiast, I draw
          inspiration from creativity, rhythm, and design. And a traveller.
        </p>
      </div>

      <img src={profile} alt="Maitry Bajracharya" className="about-profile" />
    </section>
  );
};

export default About;
