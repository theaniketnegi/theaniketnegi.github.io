import ParticlesComponent from './components/ParticlesComponent';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import { Route, Routes, useMatch } from 'react-router-dom';
import { useBlogsValue, useBlogsDispatch } from './contexts/BlogsContext';
import Blog from './components/Blog';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(
    import.meta.env.VITE_SB_PROJECT_URL,
    import.meta.env.VITE_SB_API_KEY,
);

const App = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useBlogsDispatch();
    const blogs = useBlogsValue();
    const match = useMatch('/blogs/:id');
    const blog = match
        ? blogs.find((blog) => blog.id === Number(match.params.id))
        : null;

    useEffect(() => {
        getBlogs();
    }, []);
    async function getBlogs() {
        setLoading(true);
        const { data } = await supabase
            .from('blogs')
            .select()
            .order('created_at', { ascending: false });
        dispatch({ type: 'SET_BLOG', payload: data });
        setLoading(false);
    }
    return (
        <div className="flex flex-col items-center min-h-screen relative">
            <ParticlesComponent />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs loading={loading} />} />
                <Route path="/blogs/:id" element={<Blog blog={blog} />} />
            </Routes>
        </div>
    );
};

export default App;
