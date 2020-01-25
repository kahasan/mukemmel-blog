import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import '../styles.css';
import '../bootstrap-4.3.1/dist/css/bootstrap.min.css';

import Card from '../components/Card';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';

function Home({ posts }) {
  useEffect(() => {
    var test = document.getElementsByClassName('nav-bar');
    window.onscroll = function() {
      if (window.pageYOffset >= test[0].offsetTop) {
        test[0].classList.add('nav-bar-shadow');
      } else {
        test[0].classList.remove('nav-bar-shadow');
      }
    };
  });
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />

      {posts.map(post => (
        <Card title={post.title} details={post.details} date={post.date} />
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

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/api/posts');
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
