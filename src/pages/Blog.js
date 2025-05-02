import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Top 10 Travel Destinations', excerpt: 'Discover the most amazing places to visit...' },
    { id: 2, title: 'Travel Tips for Beginners', excerpt: 'Essential advice for first-time travelers...' },
    { id: 3, title: 'Budget Travel Guide', excerpt: 'How to see the world without breaking the bank...' }
  ];

  return (
    <div className="page-container">
      <h1>Travel Blog</h1>
      <div className="blog-posts">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="read-more">Read More</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;