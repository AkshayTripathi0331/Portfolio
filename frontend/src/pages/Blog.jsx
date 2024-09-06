import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      description:
        'A comprehensive guide to using Hooks in React. Learn how to use `useState`, `useEffect`, and more to enhance your React applications.',
      link: 'https://medium.com/.../understanding-react-hooks-...',
    },
    {
      id: 2,
      title: 'JavaScript ES6 Features',
      description:
        'Exploring the new features introduced in ECMAScript 6 (ES6). This includes let/const, arrow functions, classes, and more.',
      link: 'https://dev.to/.../javascript-es6-features-...',
    },
    {
      id: 3,
      title: 'Introduction to Redux',
      description:
        'An introduction to managing application state with Redux. Learn how to set up Redux in your React app and handle global state efficiently.',
      link: 'https://redux.js.org/.../introduction-to-redux-...',
    },
  ];

  return (
    <div className="blog-page">
      <Header />

      {/* YouTube Section */}
      <section className="blog-youtube-section">
        <h2 className="blog-section-title blog-animate-fadeIn">Featured Videos</h2>
        <div className="blog-video-grid">
          <div className="blog-video-item blog-animate-fadeInUp">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/aJAu4U_zzxE?si=fNTxcYi0smRwYC5e"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="blog-video-item blog-animate-fadeInUp">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/RN3bZLPAGkY?si=lXXYDAW71J1r051l"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>



      <section className="blog-section">
        <h1 className="blog-section-title blog-animate-fadeIn">Blog</h1>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card blog-animate-fadeInUp">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
