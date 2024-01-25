import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    if (!blog) return <div className="text-white">Loading...</div>;
    return (
        <>
            {blog && (
                <div className="flex flex-col px-8 md:w-full md:px-16 mt-20 lg:mt-28 space-y-8 mb-8">
                    <div className="flex max-w-sm md:max-w-md">
                        <img
                            src={`${
                                import.meta.env.VITE_SB_PROJECT_URL
                            }/storage/v1/object/public/covers/${
                                blog.cover_url
                            }`}
                            className="object-contain"
                            alt=""
                        />
                    </div>
                    <div className="space-y-4 md:space-y-2">
                        <div className="text-3xl md:text-4xl font-bold text-white">
                            {blog.title}
                        </div>
                        <div className="text-sm md:text-lg font-bold text-white">
                            Written on {new Date(blog.created_at).toUTCString()}
                        </div>
                    </div>
                    <div className="text-xl md:max-w-7xl md:text-2xl text-white">
                        <pre className="font-sans whitespace-pre-wrap">
                            {blog.content}
                        </pre>
                    </div>
                </div>
            )}
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
};
export default Blog;
