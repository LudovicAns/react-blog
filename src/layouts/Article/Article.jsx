import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import './Article.scss'

export default function Article() {

  const { id } = useParams();

  const dataArticles = useSelector(state => state.articles);

  const getArticle = () => {
    for (const article of dataArticles) {
      if (article.id === parseInt(id)) {
        return article;
      }
    }
  }

  const article = getArticle();

  return (
    <div className='Article'>
      <Link to="/">← Retour vers le blog</Link>
      {article && 
        <div className="container">
          <h1>{article.title}</h1>
          <p>
            {article.body}
          </p>
        </div>
      }
    </div>
  )
}
