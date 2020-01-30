import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';

Blog.getInitialProps = async function() {
  const res = await fetch('http://www.hasanka.blog/api/blogs');
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
