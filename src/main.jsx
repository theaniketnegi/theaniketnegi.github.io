import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { BlogsContextProvider } from './contexts/BlogsContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BlogsContextProvider>
        <Router>
            <App />
        </Router>
    </BlogsContextProvider>,
);
