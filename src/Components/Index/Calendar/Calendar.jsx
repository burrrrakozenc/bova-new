import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Year from './Year'


const App = () => {
        const localizer = momentLocalizer(moment)
        localizer.formats.yearHeaderFormat = 'YYYY'
        return (
            <div className="app">
                <Calendar
                    localizer={localizer}
                    events={[]}
                    toolbar={true}
                    views={{
                        day: true,
                        week: true,
                        month: true,
                        year: Year
                    }}
                    messages={{year: 'Year'}}
                />
            </div>
        )
    }
;

export default App
