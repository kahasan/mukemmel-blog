import fetch from 'isomorphic-unfetch';
import Fullcontent from '../components/Fullcontent';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

Post.getInitialProps = async function(context) {
  const { postId } = context.query;
  const res = await fetch(`https://hasanka-blog.herokuapp.com/api/${postId}`);
  const blog = await res.json();
  return blog;
};

export default function Post(blog) {
  return (
    <div>
      <Header />
      <Navbar />
      <Fullcontent
        title={blog.title}
        details={blog.details}
        date={blog.date}
        photoid={blog.photoid}
      />
      <Footer />
    </div>
  );
}
