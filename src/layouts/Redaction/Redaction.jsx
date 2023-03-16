import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Redaction.scss'

export default function Redaction() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const dataArticles = useSelector(state => state.articles);

  const addArticle = () => {
    dispatch({
      type: 'ADD',
      payload: {
        userId: null,
        id: dataArticles.length + 1,
        title: title,
        body: body
      }
    })
  }

  return (
    <div className='Redaction'>
      <h1>Rédaction d'un post</h1>
      <div className="inputs">
        <input type="text" placeholder='Entrez votre titre' value={title} onChange={e => setTitle(e.target.value)}/>
        <textarea placeholder='Entrez votre contenu' value={body} onChange={e => setBody(e.target.value)}></textarea>
        <button onClick={() => {
          addArticle();
          setTitle("");
          setBody("");
        }}>Envoyer</button>
      </div>
    </div>
  )
}
