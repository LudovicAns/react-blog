const INITIAL_STATE = {
  articles: []
}

export default function dataArtcilesReducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {

    case "LOADING": {
      if (state.articles.length !== 0) {
        return state;
      }

      return {
        ...state,
        articles: action.payload
      }
    }

    case "ADD": {
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      }
    }

    default: {
      return state;
    }

  }
}

export const getArticles = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    dispatch({
      type: "LOADING",
      payload: data
    })
  });

}