/* use client */
'use client';
`use client`;
import React, { useState } from "react";

const LatestArticles = () => {
    
  // Dummy article data
  const [showMore, setShowMore] = useState(false); // State to manage whether to show more articles
  const articles = [
    { id: 1, title: "Article 1", image: "/71e2cd1709116400deb9af41ed9aa012.jpg", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", slug: "article-1" },
    { id: 2, title: "Article 2", image: "/5c72c6b4f096bbbec0680ab784a5dcef.jpg", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "article-2" },
    { id: 3, title: "Article 3", image: "/a1ef27ac038072c6f30264ab0d7bc72d.jpg", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", slug: "article-3" },
    { id: 4, title: "Article 4", image: "/article4.jpg", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", slug: "article-4" },
    { id: 5, title: "Article 5", image: "/article5.jpg", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", slug: "article-5" },
    { id: 6, title: "Article 6", image: "/article6.jpg", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", slug: "article-6" },
  ];

  return (
    <div className="p-8">
      <h2 className="mb-4 text-blue-800">Latest Articles</h2>
      <div className="flex flex-wrap">
        {/* Display first 3 articles */}
        {articles.slice(0, showMore ? articles.length : 3).map((article) => (
          <div key={article.id} className="w-full md:w-1/2 lg:w-1/3 p-4 border-2 border-gray-300 rounded-md">
            <img src={article.image} alt={article.title} className="mb-4" />
            <h3 className="text-xl mb-2">{article.title}</h3>
            <p className="mb-4">{article.content}</p>
            <button className="mt-12 w-32 h-12 rounded-full border-2 border-gray-500 text-gray-500">Read More</button>
          </div>
        ))}
      </div>
      {/* Show more button */}
      {!showMore && articles.length > 3 && (
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md" onClick={() => setShowMore(true)}>Show More</button>
      )}
    </div>
  );
};

export default LatestArticles;
