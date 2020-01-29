import React, { useEffect } from 'react';
import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Navbar() {
  useEffect(() => {
    var test = document.getElementsByClassName('nav-bar');
    window.onscroll = function() {
      if (window.pageYOffset >= test[0].offsetTop) {
        test[0].classList.add('nav-bar-shadow');
      } else {
        test[0].classList.remove('nav-bar-shadow');
      }
    };
  });
  return (
    <nav className="nav-bar sticky-top">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link href="/">
              <a className="nav-bar-item p-2 text-muted">ANASAYFA</a>
            </Link>
            <Link href="blogs">
              <a className="nav-bar-item p-2 text-muted">YAZILAR</a>
            </Link>
            <a className="nav-bar-item p-2 text-muted">İLETİŞİM</a>
          </div>
          <div className="nav-search col text-muted">ARAMA</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
