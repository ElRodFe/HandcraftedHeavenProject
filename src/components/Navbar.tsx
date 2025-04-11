const Navbar: React.FC = () => {
    return (
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item has-text-weight-bold">Handcrafted Heaven</a>
        </div>
  
        <div className="navbar-menu">
          <div className="navbar-start">
            {["Link one", "Link two", "Link three", "Link four"].map((link, index) => (
              <a key={index} className="navbar-item">{link}</a>
            ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <input className="input is-rounded" type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  