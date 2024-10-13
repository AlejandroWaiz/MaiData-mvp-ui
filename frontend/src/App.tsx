import { useState } from 'react';
import './App.css';
import MakeSidebar from "./components/navBar/sideBar";
import Dashboard from './components/dashboards/Dashboard';
import { registerCharts } from './components/charts/RegisterCharts';

function App() {    
    const [expanded, setExpanded] = useState(true);

    registerCharts();

    return (
        <div id="App" className="flex min-h-screen min-w-screen justify-center"> {/* Asegura que el contenedor principal tenga la altura mínima de la pantalla */}
            <MakeSidebar expanded={expanded} setExpanded={setExpanded} />
            <main className="flex-1 transition-all duration-300 ml-5 overflow-y-auto"> {/* Asegura que el main tenga scroll vertical */}
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
