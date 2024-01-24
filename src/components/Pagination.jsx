const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="">
            <ul className="flex justify-center items-center">
                {pageNumbers.map((number) => (
                    <a
                        className="text-white border-2 border-white py-2 px-4 opacity-80 group hover:bg-white hover:text-[#151515] transition-colors duration-150"
                        onClick={() => paginate(number)}
                        href="#"
                        key={number}
                    >
                        <li>{number}</li>
                    </a>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
