import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: 'Example article number 1',
    author: 'John Doe',
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur eligendi suscipit labore esse, ipsa laborum. Soluta necessitatibus voluptates voluptatum fugit perferendis eum repellendus consequatur nihil sed. Accusamus, accusantium tempora!"
  },
  {
    id: 2,
    title: 'Example article number 2',
    author: 'Anthony Hopkins',
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur eligendi suscipit labore esse, ipsa laborum. Soluta necessitatibus voluptates voluptatum fugit perferendis eum repellendus consequatur nihil sed. Accusamus, accusantium tempora!"
  },
  {
    id: 3,
    title: 'Example article number 3',
    author: 'Christian Bale',
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur eligendi suscipit labore esse, ipsa laborum. Soluta necessitatibus voluptates voluptatum fugit perferendis eum repellendus consequatur nihil sed. Accusamus, accusantium tempora!"
  }
]

function HomePage() {
  const article = articles.map(article => (
    <Article key={article.id}  {...article} />
  ))
  return (
    <div>
      {article}
    </div>
  );
}

export default HomePage;