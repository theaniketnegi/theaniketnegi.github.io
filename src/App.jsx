import ParticlesComponent from './components/Particles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IconContext } from 'react-icons';
import Typewriter from 'typewriter-effect';

const App = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative">
            <ParticlesComponent />
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

            <div className="flex flex-col justify-center items-center h-full space-y-6">
                <div className='w-[26rem]'>
                    <div className="text-6xl text-white font-bold tracking-wider">
                        Hi,
                    </div>
                    <div className="text-5xl text-white font-bold tracking-wider">
                        I&apos;m{' '} <div className='inline-block text-red-200'>
                        <Typewriter
                        options={{
                            strings: ['Aniket Negi.', 'a Developer.'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></div>
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
        </div>
    );
};

export default App;
