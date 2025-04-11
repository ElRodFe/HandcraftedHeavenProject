const Footer: React.FC = () => {
    return (
      <footer className="footer has-background-dark has-text-white">
        <div className="content has-text-centered">
          <div className="columns is-centered">
            <div className="column is-4">
              <h3 className="title is-5 has-text-white">Logo</h3>
              <p className="has-text-grey-light">123 Main Street, City, State</p>
            </div>
            <div className="column is-4">
              <h3 className="title is-5 has-text-white">Column One</h3>
              <ul>
                <li><a href="#" className="has-text-grey-light">Link one</a></li>
                <li><a href="#" className="has-text-grey-light">Link two</a></li>
              </ul>
            </div>
            <div className="column is-4">
              <h3 className="title is-5 has-text-white">Column Two</h3>
              <ul>
                <li><a href="#" className="has-text-grey-light">Link three</a></li>
                <li><a href="#" className="has-text-grey-light">Link four</a></li>
              </ul>
            </div>
          </div>
          <p className="has-text-grey-light">
            © 2024 Your Website. All rights reserved. | <a href="#" className="has-text-grey-light">Privacy Policy</a> | <a href="#" className="has-text-grey-light">Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  