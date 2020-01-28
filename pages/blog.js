import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Fullcontent from '../components/Fullcontent';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';

// Blog.getInitialProps = async function() {
//   // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
//   const res = await fetch('http://localhost:3000/api/blogs');
//   //console.log(res);
//   const json = await res.json();
//   console.log(json);
//   return { posts: json };
// };

var posts = [
  {
    title: 'Tek blog sayfasi',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. In eu mi bibendum neque egestas congue quisque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Sit amet volutpat consequat mauris nunc congue nisi vitae. Lobortis mattis aliquam faucibus purus. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Pulvinar mattis nunc sed blandit libero volutpat sed. In tellus integer feugiat scelerisque varius morbi enim nunc. Nunc faucibus a pellentesque sit. Tristique risus nec feugiat in fermentum posuere urna. Sodales ut eu sem integer vitae justo eget magna. Ultricies tristique nulla aliquet enim tortor at. Bibendum est ultricies integer quis auctor elit sed. Et odio pellentesque diam volutpat commodo sed egestas.Pretium vulputate sapien nec sagittis aliquam. Elit at imperdiet dui accumsan sit. Aenean vel elit scelerisque mauris pellentesque. Proin libero nunc consequat interdum varius sit amet. At volutpat diam ut venenatis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Quam quisque id diam vel quam elementum pulvinar etiam. Purus sit amet volutpat consequat mauris nunc congue. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Pharetra sit amet aliquam id. Justo eget magna fermentum iaculis eu non. Praesent tristique magna sit amet purus gravida. In fermentum et sollicitudin ac orci. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Enim sed faucibus turpis in eu mi bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Auctor elit sed vulputate mi. Viverra vitae congue eu consequat ac felis donec et odio.',
    date: '25.01.2020',
    photoid: '1020'
  }
];

export default function Blog() {
  return (
    <div>
      <Header />
      <Navbar />

      {posts
        .slice(0)
        .reverse()
        .map(post => (
          <Fullcontent
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
