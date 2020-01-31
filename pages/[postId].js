import fetch from 'isomorphic-unfetch';
import Fullcontent from '../components/Fullcontent';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

let url = '';

if (process.env.NODE_ENV !== 'production') {
  url = 'http://localhost:3000';
} else {
  url = 'http://www.hasanka.blog';
}

Post.getInitialProps = async function(context) {
  const { postId } = context.query;
  const res = await fetch(`${url}/api/${postId}`);
  const blog = await res.json();
  return blog;
};

export default function Post(blog) {
  return (
    <div>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-157507299-1"
        ></script>
        <script>
          {useEffect(() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'UA-157507299-1');
          })}
        </script>
      </Head>
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
