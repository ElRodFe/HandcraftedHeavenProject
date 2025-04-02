const HeroSection: React.FC = () => {
    return (
      <section className="hero is-medium is-light">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title is-3">Hero heading of moderate length goes here</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Visi duisvel et curae in urna.
            </p>
            <div className="field has-addons is-centered mt-5">
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
  