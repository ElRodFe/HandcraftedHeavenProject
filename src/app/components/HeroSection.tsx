const HeroSection: React.FC = () => {
    return (
      <section className="hero is-medium is-light">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title is-3">Welcome To Handcrafted Haven</h1>
            <p className="subtitle">
              Our Partners only sell the highest hand crafted goods on our site.
            </p>
            <div className="field is-grouped is-grouped-centered mt-5">
              <div className="control">
                <input className="input" type="text" placeholder="Username" />
              </div>
              <div className="control">
                <input className="input" type="password" placeholder="Password" />
              </div>
              <div className="control">
                <button className="button is-dark">Login</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
