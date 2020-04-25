import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            const article = action.payload;
            return { ...state, articles: [...state.articles, article] };
        case DATA_LOADED:
            const remoteArticles = action.payload;
            return {
                ...state,
                remoteArticles: [...remoteArticles],
            };
        default:
            return state;
    }
};

export default rootReducer;
