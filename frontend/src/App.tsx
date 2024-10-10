import { useState } from 'react';
import './App.css';
import MakeSidebar from "./components/navBar/sideBar";
import Dashboard from './components/dashboards/Dashboard';

function App() {
    const [expanded, setExpanded] = useState(true);

    return (
        <div id="App" className="flex">
            <MakeSidebar expanded={expanded} setExpanded={setExpanded} />
            <main className={`flex-1 transition-all duration-300 ${expanded ? 'ml-5' : 'ml-5'}`}>
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
