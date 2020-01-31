import '../styles.css';
import Head from 'next/head';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';

function Fullcontent(props) {
  var src = `https://picsum.photos/id/${props.photoid}/1140/500`;
  return (
    <div className="container card-container fullcontent-container">
      <div className="card fullcontent-main ">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <div className="fullcontent">
          <img className="card-img-top fullcontent-img" src={src} />

          <div className="card-body fullcontent-body">
            <span className="card-information">
              <span>{props.date}</span>
              <span> by Hasan Kahraman</span>
            </span>

            <h5 className="card-title">{props.title}</h5>

            <ReactMarkdown source={props.details} className="card-text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullcontent;
