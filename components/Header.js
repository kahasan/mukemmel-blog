import Head from 'next/head';
import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Header() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <div className="hero">
          <div className="row align-items-center">
            <h1 className="hero-title col-md-6">
              <Link href="/">
                <a style={{ color: 'black' }}>HASANKA</a>
              </Link>
            </h1>

            <div className="social-links col-md-6">
              <span className="welcome social-link">Hoşgeldiniz</span>
              <a
                href="https://www.twitter.com/Hsn_Kahramn"
                className="social-link"
                target="_blank"
              >
                <img src="../icons/twitter.svg" className="icon"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/hasan-kahraman-790289111/"
                className="social-link"
                target="_blank"
              >
                <img src="../icons/linkedin.svg" className="icon"></img>
              </a>
              <a
                href="https://www.instagram.com/hsnkahraman/"
                className="social-link"
                target="_blank"
              >
                <img src="../icons/instagram.svg" className="icon"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
