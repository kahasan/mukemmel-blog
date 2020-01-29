import '../styles.css';
import Head from 'next/head';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Card(props) {
  var src = `https://picsum.photos/id/${props.photoid}/290/400`;
  return (
    <div className="container card-container ">
      <div className="card card-main ">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <img className="card-img-top" src={src} />

        <div className="card-body">
          <span className="card-information">
            <span>{props.date}</span>
            <span> by Hasan Kahraman</span>
          </span>

          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">
            {props.details.length > 350
              ? props.details.substr(0, 350) + '...'
              : props.details}
          </p>
          <Link href="/[postId]" as={`/${props.id}`}>
            <a>
              <button type="button" className="btn btn-success card-btn">
                Devamını Oku
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
