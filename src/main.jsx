import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { BlogsContextProvider } from './contexts/BlogsContext.jsx';
import ParticlesComponent from './components/ParticlesComponent.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BlogsContextProvider>
        <Router>
			<ParticlesComponent />
            <App />
        </Router>
    </BlogsContextProvider>,
);
