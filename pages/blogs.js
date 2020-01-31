import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

let url = '';

if (process.env.NODE_ENV !== 'production') {
  url = 'http://localhost:3000';
} else {
  url = 'http://www.hasanka.blog';
}

Blog.getInitialProps = async function() {
  const res = await fetch(`${url}/api/blogs`);
  const json = await res.json();
  return { posts: json };
};

export default function Blog({ posts }) {
  return (
    <div>
      <Header />
      <Navbar />

      {posts
        .slice(0)
        .reverse()
        .map(post => (
          <Card
            title={post.title}
            details={post.details}
            date={post.date}
            photoid={post.photoid}
            id={post._id}
          />
        ))}
      <Footer />
    </div>
  );
}
