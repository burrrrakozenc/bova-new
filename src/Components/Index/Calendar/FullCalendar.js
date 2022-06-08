import React from "react";
// import "./styles.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

export default function App() {
    const events = [{ title: "today's event", date: new Date() }];


    return (
        <div className="App">
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                markingType={'custom'}
                markedDates={{
                    '2018-03-28': {
                        customStyles: {
                            container: {
                                backgroundColor: 'green'
                            },
                            text: {
                                color: 'black',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    '2018-03-29': {
                        customStyles: {
                            container: {
                                backgroundColor: 'white',
                                elevation: 2
                            },
                            text: {
                                color: 'blue'
                            }
                        }
                    }
                }}
            />
        </div>
    );
}
