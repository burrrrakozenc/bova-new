import './App.css';
import './assets/css/main.css';
import Index from './pages/Index.js'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarNew from "./pages/Calendar";
// import CalendarNew from './Components/Index/Calendar/FullCalendarNew'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}>
                    {/*<Route index element={<Index />} />*/}
                    {/*<Route path="teams" element={<Teams />}>*/}
                    {/*  <Route path=":teamId" element={<Team />} />*/}
                    {/*  <Route path="new" element={<NewTeamForm />} />*/}
                    {/*  <Route index element={<LeagueStandings />} />*/}
                    {/*</Route>*/}
                </Route>
                <Route path="/takvim" element={<CalendarNew />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;