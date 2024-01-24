const Blog = ({ blog }) => {
    if (!blog) return <div className="text-white">Loading...</div>;
    console.log(blog);
    return (
        <>
            {blog && (
                <div className="flex flex-col px-16 mt-24 w-full space-y-8">
                    <div className="h-96 flex items-center max-w-[25rem]">
                        <img
                            src={`${
                                import.meta.env.VITE_SB_PROJECT_URL
                            }/storage/v1/object/public/covers/${
                                blog.cover_url
                            }`}
                            className="object-cover w-[500px]"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white">
                            {blog.title}
                        </div>
                        <div className="text-sm font-bold text-white">
                            Written on {new Date(blog.created_at).toUTCString()}
                        </div>
                    </div>
                    <div className="text-2xl text-white">
                        <pre className="font-sans">{blog.content}</pre>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
