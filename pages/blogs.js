import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Card from '../components/Card';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';

Blog.getInitialProps = async function() {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch('http://localhost:3000/api/blogs');
  //console.log(res);
  const json = await res.json();
  console.log(json);
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
          />
        ))}
      <Footer />
    </div>
  );
}
