import React, { useState, useEffect } from "react";
import "./main.css";

function Main() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url =
      "https://newsapi.org/v2/everything?q=world&apiKey=d44699d593354096bed0b6b0bcf41fa7";
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        // console.log(news.articles);
        setArticles(news.articles);
      });
  }, []);

  let searchNews = () => {
    let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=d44699d593354096bed0b6b0bcf41fa7`;
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        console.log(news.articles);
        setArticles(news.articles);
      });
  };
  let readValue = (event) => {
    setSearch(event);
  };

  return (
    <div className="main-panel">
      <div className="header-wrapper">
        <div>
          <span>
            <h1 className="header">Daily Mirror</h1>
          </span>
          <p className="header-slogan">The Story Unfolds</p>
        </div>
        <div className="search-box">
          <input
            type="search"
            onChange={(event) => readValue(event.target.value)}
            placeholder="Enter a topic to search..."
            className="search"
            id="serch"
          />
          <button className="search-button" onClick={() => searchNews()}>
            🔍
          </button>
        </div>
      </div>
      {articles.length == 0 ? (
        <h1>No Data Found</h1>
      ) : (
        articles.map((article, index) => (
          <div className="blogs">
            <div key={index} className="body">
              <div className="news-img-container">
                <img
                  className="news-img"
                  src={article.urlToImage}
                  alt="news related image"
                />
              </div>
              <div className="news-contents">
                <div className="article-details">
                  <h6>Author: {article.author}</h6>
                  <h6>published at: {article.publishedAt}</h6>
                </div>
                <h2 className="article-title">{article.title}</h2>
                <p className="article-desc">{article.description}</p>
                <a href={article.url} target="_blank">
                  {" "}
                  <button className="button">Read more...</button>
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Main;
