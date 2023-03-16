import React, { useEffect } from 'react';
import ArticleResume from '../../components/ArticleResume/ArticleResume';
import './Blog.scss';
import { getArticles } from '../../redux/reducers/dataArticlesReducer';
import { useDispatch, useSelector } from 'react-redux'; 

export default function Blog() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const dataArticles = useSelector(state => state.articles);

  return (
    <div className='Blog'>
      <h1>Tous les articles</h1>
      <div className="blog-resumes">
        { dataArticles &&
          dataArticles.map(article => {
            return (
              <ArticleResume key={article.id} data={article}/>
            )
          })
        }
      </div>
    </div>
  )
}
