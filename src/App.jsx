import ParticlesComponent from './components/ParticlesComponent';

import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative">
            <ParticlesComponent />
            <Navbar />
			<Home />
        </div>
    );
};

export default App;
