import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="absolute top-0 right-0 px-16 py-8 flex space-x-8">
            <Link to='/' className="group hover:cursor-pointer space-y-1">
                <div className="text-white text-xl">Home</div>
                <div className="border-t-2 opacity-0 group-hover:opacity-100 duration-500"></div>
            </Link>
            <Link to='/blogs' className="group hover:cursor-pointer space-y-1">
                <div className="text-white text-xl">Blog</div>
                <div className="border-t-2 opacity-0 group-hover:opacity-100 duration-500"></div>
            </Link>
        </nav>
    );
};

export default Navbar;
