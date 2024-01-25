import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ title, cover_url, id }) => {
    return (
        <div className="rounded overflow-hidden group hover:-translate-y-1 hover:cursor-pointer bg-white/85 transition-transform duration-150 h-[275px] ">
            <Link
                to={`${id}`}
                className="h-full flex flex-col justify-between "
            >
                <div className="h-[220px]">
                    <img
                        src={`${
                            import.meta.env.VITE_SB_PROJECT_URL
                        }/storage/v1/object/public/covers/${cover_url}`}
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="px-4 py-2 w-full flex justify-between items-center flex-grow">
                    <div className="font-bold text-lg  truncate ... text-[#151515]">
                        {title}
                    </div>
                    <div className="text-sm text-[#151515]">read...</div>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Card;
