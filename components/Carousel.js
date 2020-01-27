import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';

const photo1 = 'https://picsum.photos/1280/480?random=1';
const photo2 = 'https://picsum.photos/1280/480?random=2';
const photo3 = 'https://picsum.photos/1280/480?random=3';

function Carousel() {
  return (
    <div className="container carousel-main">
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
            <img src={photo1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
