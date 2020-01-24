import '../styles.css';
import Head from 'next/head';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';

function Card(props) {
  return (
    <div className="container">
      <div className="card card-main">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <p className="card-text">
          <img src="https://picsum.photos/290/400?random=1" />
          <div className="card-body">
            <span className="card-information">
              <span>{props.date}</span>
              <span> by Hasan Kahraman</span>
            </span>

            <h5 className="card-title">{props.title}</h5>

            <p className="card-text">
              {props.details.length > 100
                ? props.details.substr(0, 100) + '...'
                : props.details}
            </p>
            <button type="button" className="btn btn-success">
              Devamını Oku
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Card;
