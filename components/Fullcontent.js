import '../styles.css';
import Head from 'next/head';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';

function Fullcontent(props) {
  var src = `https://picsum.photos/id/${props.photoid}/1140/400`;
  return (
    <div className="container card-container fullcontent-container">
      <div className="card fullcontent-main ">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <img className="card-img-top fullcontent-img" src={src} />

        <div className="card-body fullcontent-body">
          <span className="card-information">
            <span>{props.date}</span>
            <span> by Hasan Kahraman</span>
          </span>

          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.details}</p>
        </div>
      </div>
    </div>
  );
}

export default Fullcontent;
