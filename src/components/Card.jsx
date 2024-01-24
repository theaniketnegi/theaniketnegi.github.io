import { Link } from 'react-router-dom';
const Card = ({ title, cover_url, id }) => {
    return (
        <Link to={`${id}`}>
            <div className="max-w-sm flex flex-col rounded overflow-hidden group hover:-translate-y-1 hover:cursor-pointer bg-white/70 transition-transform duration-150 h-64">
                <div className="flex items-center h-[220px]">
                    <img
                        src={cover_url}
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="px-2 py-2 w-full flex justify-between items-center">
                    <div className="font-bold text-lg  truncate ... text-black">
                        {title}
                    </div>
                    <div className="text-sm text-black">read...</div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
