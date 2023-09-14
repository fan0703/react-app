import NewsItem from "../newsitem/NewsItem";

export default function NewsList({ articles }) {
  return (
    <div className=" NewList">
      {articles.map((article) => {
        return (
          <div className="newList-app">
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              image={article.image}
            />
          </div>
        );
      })}
    </div>
  );
}