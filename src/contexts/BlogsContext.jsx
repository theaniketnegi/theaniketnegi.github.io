import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const BlogsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOG':
            return action.payload;
    }
};

const BlogsContext = createContext();

export const BlogsContextProvider = (props) => {
    const [blogs, blogsDispatch] = useReducer(BlogsReducer, []);

    return (
        <BlogsContext.Provider value={[blogs, blogsDispatch]}>
            {props.children}
        </BlogsContext.Provider>
    );
};

BlogsContextProvider.propTypes = {
    children: PropTypes.node,
};

export const useBlogsValue = () => {
    const blogsAndDispatch = useContext(BlogsContext);
    return blogsAndDispatch[0];
};

export const useBlogsDispatch = () => {
    const blogsAndDispatch = useContext(BlogsContext);
    return blogsAndDispatch[1];
};

export default BlogsContext;
