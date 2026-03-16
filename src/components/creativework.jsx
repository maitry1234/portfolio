import "./creativework.css";

export default function CreativeWork() {
  return (
    <section className="creative">
      <div className="creative-noise" />
      <div className="creative-glow" />

      <div className="creative-container">
        {/* Header */}
        <div className="creative-header">
          <h2 className="creative-title">
            <span className="ct-normal">Creative</span>
            <span className="ct-cursive">Work</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="creative-body">
          {/* Bio side */}
          <div className="creative-bio">
            <div className="bio-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M18 16 L18 32 L34 24 Z" fill="currentColor" />
              </svg>
            </div>
            <p className="bio-text">
              I create music sometimes — just experimenting with sounds,
              textures, and whatever feels right. Rock and alternative at the
              core, but the edges are always blurry.
            </p>
            <a
              href="https://www.youtube.com/@Maitryb"
              target="_blank"
              rel="noopener noreferrer"
              className="yt-button"
            >
              <svg className="yt-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
              <svg className="yt-arrow" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h12M10 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Visual side */}
          <div className="creative-visual">
            <div className="vinyl-wrap">
              <div className="vinyl">
                <div className="vinyl-grooves" />
                <div className="vinyl-label">
                  <span>MAITRYB</span>
                </div>
              </div>
              <div className="vinyl-shine" />
            </div>

            {/* Floating tags */}
            <div className="float-tag tag-1">Rock</div>
            <div className="float-tag tag-2">Alternative</div>
            <div className="float-tag tag-3">Experimental</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="creative-footer">
          <div className="footer-line" />
          <span className="footer-text">More coming soon</span>
          <div className="footer-line" />
        </div>
      </div>
    </section>
  );
}
