const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <div className="has-background-grey-lighter" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            [Image]
          </div>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">{title}</p>
        <p className="content">{description}</p>
        <a href="#" className="button is-link is-small">Read more</a>
      </div>
    </div>
  );
  
  const Features: React.FC = () => {
    const featureData = [
      { title: "Medium length headline", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
      { title: "Medium length headline", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
      { title: "Medium length headline", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }
    ];
  
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            {featureData.map((feature, index) => (
              <div key={index} className="column">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  