import fetch from 'isomorphic-unfetch';

import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';

import Card from '../components/Card';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

function Home({ posts }) {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />

      {posts.map(post => (
        <Card
          title={post.title}
          details={post.details}
          date={post.date}
          photoid={post.photoid}
          id={post._id}
        />
      ))}

      <Footer />

      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

let url = '';

if (process.env.NODE_ENV !== 'production') {
  url = 'http://localhost:3000';
} else {
  url = 'http://www.hasanka.blog';
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${url}/api/blogs`);
  const json = await res.json();
  return { posts: json };
};

export default Home;
