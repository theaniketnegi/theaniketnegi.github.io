import Card from './Card';

const BlogList = ({ blogs, loading }) => {
    if (loading)
        return (
            <div className="text-2xl text-white text-center w-full">
                loading....
            </div>
        );
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl gap-12 w-full text-white">
            {blogs.map((blog) => {
                return (
                    <Card
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        cover_url={blog.cover_url}
                    />
                );
            })}
        </div>
    );
};

export default BlogList;
