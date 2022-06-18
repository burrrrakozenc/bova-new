import './App.css';
import './assets/css/main.css';
import { BaseURLContext } from "./baseURL-context";
import Index from './pages/Index.js'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarNew from "./pages/Calendar";
import {useState} from "react";

// import CalendarNew from './Components/Index/Calendar/FullCalendarNew'

function App() {
    const [baseURL, setBaseURL] = useState(process.env.REACT_APP_CONTENTFUL_API);
    const baseURLValue = { baseURL, setBaseURL };
    
    return (
        <div className="app">
            <BaseURLContext.Provider value={baseURLValue}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index/>}>
                            {/*<Route index element={<Index />} />*/}
                            {/*<Route path="teams" element={<Teams />}>*/}
                            {/*  <Route path=":teamId" element={<Team />} />*/}
                            {/*  <Route path="new" element={<NewTeamForm />} />*/}
                            {/*  <Route index element={<LeagueStandings />} />*/}
                            {/*</Route>*/}
                        </Route>
                        <Route path="/takvim" element={<CalendarNew/>}/>
                    </Routes>
                </BrowserRouter>
            </BaseURLContext.Provider>
        </div>
    );
}

export default App;