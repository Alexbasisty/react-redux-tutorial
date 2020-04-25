import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            const article = action.payload;
            return { articles: [...state.articles, article] };
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteArticles: state.remoteArticles.concat(action.payload),
            });
        default:
            return state;
    }
};

export default rootReducer;
