import React from 'react';
import './Blog.css'; // Import CSS for additional styling

function Blog() {
  const blogList = [
    {
      title: 'Understanding React Hooks',
      description: 'A comprehensive guide to using Hooks in React.',
      link: 'https://medium.com/.../understanding-react-hooks-...',
    },
    {
      title: 'JavaScript ES6 Features',
      description: 'Exploring new features introduced in ECMAScript 6.',
      link: 'https://dev.to/.../javascript-es6-features-...',
    },
    // Add more blogs here...
  ];

  return (
    <section className="blog-section">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-list">
        {blogList.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2 className="blog-card-title">{blog.title}</h2>
            <p className="blog-card-description">{blog.description}</p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-card-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
