import React from "react";
export const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article) => {
      if (article) {
        console.log(article);
        const {
          headline: { main },
          byline: { original },
          web_url,
          _id,
        } = article;
        return (
          <div className="ListItem">
            <a href={web_url} target="_blank">
              <article key={_id}>
                <h2>{main}</h2>
                <p>
                  <i>{original}</i>
                </p>
              </article>
            </a>
          </div>
        );
      } else {
        return null;
      }
    })}
  </>
);
