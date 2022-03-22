//
const initialState = {
  articles: [],
};

// Selectors

export const selectArticles = (state) => state.articles;

// Actions

export const setArticlesAction = (articles) => {
  return {
    type: "search/setArticles",
    payload: articles,
  };
};

// Reducer

export default function articleReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "search/setArticles":
      return { ...state, articles: payload };
    default:
      return state;
  }
}
