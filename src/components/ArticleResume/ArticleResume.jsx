import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleResume.scss'

export default function BlogResume(props) {

  const {data} = props;

  return (
    <div className='BlogResume'>
      <div className='title-container'>
        <h2>{data.title}</h2>
      </div>
      <div className='link-container'>
        <Link to={`/article/${data.id}`}>Lire l'article →</Link>
      </div>
    </div>
  )
}
