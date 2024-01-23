const Navbar = () => {
    return (
        <nav className="absolute top-0 right-0 px-8 py-4 flex space-x-8">
            <div className="group hover:cursor-pointer space-y-1">
                <div className="text-white text-xl">Home</div>
                <div className="border-t-2 opacity-0 group-hover:opacity-100 duration-500"></div>
            </div>
            <div className="group hover:cursor-pointer space-y-1">
                <div className="text-white text-xl">Blog</div>
                <div className="border-t-2 opacity-0 group-hover:opacity-100 duration-500"></div>
            </div>
        </nav>
    );
};

export default Navbar;
