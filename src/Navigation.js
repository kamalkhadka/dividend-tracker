
function Navigation() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Track Dividend</a>
          </div>
          <ul className="nav navbar-right">
            <li><a href="/signup" className="btn btn-secondary">Sign Up</a></li>
            <li><a href="/login" className="btn btn-primary">Login</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
