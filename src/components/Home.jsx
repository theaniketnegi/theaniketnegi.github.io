import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IconContext } from 'react-icons';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full space-y-6">
            <div className="w-[26rem]">
                <div className="text-6xl text-white font-bold tracking-wider">
                    Hi,
                </div>
                <div className="text-5xl text-white font-bold tracking-wider">
                    I&apos;m{' '}
                    <div className="inline-block text-red-200">
                        <Typewriter
                            options={{
                                strings: ['Aniket Negi.', 'a Developer.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>
            <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
                <div className="flex space-x-6 justify-between w-full px-4">
                    <a
                        href="https://github.com/theaniketnegi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aniket-negi-a7203b16b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:aniketng08@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoMdMail />
                    </a>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default Home;
