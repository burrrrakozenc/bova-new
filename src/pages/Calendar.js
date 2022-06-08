import React, {useEffect} from "react";
import Test from '../assets/images/404-400x240.jpg'
// import "./styles.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import '../assets/css/calendarBig.css'

export default function Calendar() {
    const events = [{title: "today's event", date: new Date()}];
    const styleNew = {
        backgroundColor: 'black !important'
    }
    useEffect(() => {
        var el = document.querySelector('td[data-date="2022-06-05"]');
        el.style.backgroundImage = `url(${Test})`
    },[])


    return (
        <div className="App">
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={events}
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
                    '2022-06-01': {
                        customStyles: {
                            container: {
                                backgroundColor: 'black',
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
