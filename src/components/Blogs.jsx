import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import BlogList from './BlogList';
import { useBlogsValue } from '../contexts/BlogsContext';

const Blogs = ({ loading }) => {
    const blogs = useBlogsValue();
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(8);

    // Get current blogs
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="md:flex md:flex-col w-full mx-auto mt-24 px-20 py-8 md:py-4 space-y-8 md:space-y-16 ">
            <div className="text-5xl text-white font-bold">Blogs</div>
            <div className="md:h-[80rem] lg:h-[60rem] xl:h-[40rem] flex ">
                <BlogList blogs={currentBlogs} loading={loading} />
            </div>
            <div className="flex justify-center items-center h-12">
                <Pagination
                    blogsPerPage={blogsPerPage}
                    totalBlogs={blogs.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default Blogs;
