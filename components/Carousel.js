import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Head from 'next/head';

function Carousel(props) {
  return (
    <div className="container carousel-main">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Marcellus&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`https://picsum.photos/id/${props.photoid1}/1280/500?blur=2`}
              className="d-block w-100"
              alt="..."
            />
            <div class="container">
              <Link href="/[postId]" as={`/${props.id1}`}>
                <a>
                  <div class="carousel-body">
                    <h1>{props.title1}</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={`https://picsum.photos/id/${props.photoid2}/1280/500?blur=2`}
              className="d-block w-100"
              alt="..."
            />
            <div class="container">
              <Link href="/[postId]" as={`/${props.id2}`}>
                <a>
                  <div class="carousel-body">
                    <h1>{props.title2}</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={`https://picsum.photos/id/${props.photoid3}/1280/500?blur=2`}
              className="d-block w-100"
              alt="..."
            />
            <div class="container">
              <Link href="/[postId]" as={`/${props.id3}`}>
                <a>
                  <div class="carousel-body">
                    <h1>{props.title3}</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
