import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages';
import * as serviceWorker from './serviceWorker';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Use the render method on the root element
root.render(<MainPage />);

serviceWorker.unregister();
