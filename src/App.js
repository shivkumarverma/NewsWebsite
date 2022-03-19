import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import NavBar from "./NavBar";

import Card from "./Card";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=all")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setNews(res.data);
      });
  }, []);

  console.log(news);

  return (
    <>
      <NavBar />
      <div className="conatiner">
        <div className="m-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {news.map((e) => (
              <Card
                key={e.id}
                imageUrl={e.imageUrl}
                content={e.content}
                title={e.title}
                date={e.date}
                readMoreUrl={e.readMoreUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
