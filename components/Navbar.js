import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="nav-bar sticky-top">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link href="/">
              <a className="nav-bar-item p-2 text-muted" href="#">
                ANASAYFA
              </a>
            </Link>
            <a className="nav-bar-item p-2 text-muted" href="#">
              YAZILAR
            </a>
            <a className="nav-bar-item p-2 text-muted" href="#">
              İLETİŞİM
            </a>
          </div>
          <div className="nav-search col text-muted">ARAMA</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
