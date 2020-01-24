import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="nav-bar sticky-top">
      <div className="container">
        <div className="row">
          <div className="col">
            <a className="nav-bar-item p-2 text-muted" href="#">
              HOME
            </a>
            <a className="nav-bar-item p-2 text-muted" href="#">
              ARTICLES
            </a>
            <a className="nav-bar-item p-2 text-muted" href="#">
              CONTACT
            </a>
          </div>
          <div className="nav-search col">SEARCH</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
