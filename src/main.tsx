
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set favicon dynamically
const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
  favicon.setAttribute('href', '/lovable-uploads/2b249ce4-7d8f-4896-a413-c77d555bc891.png');
}

createRoot(document.getElementById("root")!).render(<App />);
