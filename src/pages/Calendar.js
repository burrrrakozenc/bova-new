import React, {useContext, useEffect, useState} from "react";
import trLocale from '@fullcalendar/core/locales/tr';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import DateObject from "react-date-object";
import Moment from 'moment';

// import "./styles.css";


import {BaseURLContext} from "../baseURL-context";
import {protectedEnpointPostRequest} from "../static/functions";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import '../assets/css/calendarBig.css'
import Test from '../assets/images/404-400x240.jpg'
import moment from "moment";

export default function Calendar() {
    const {baseURL} = useContext(BaseURLContext);
    // const events = [{title: "today's event", date: new Date()}];
    const [events, setEvents] = useState([])
    const [allConcerts, setAllConcerts] = useState([])
    const [allMappedConcerts, setAllMappedConcerts] = useState([])
    const styleNew = {
        backgroundColor: 'black !important'
    }
    useEffect(() => {
        getCalendar()
        test2()
        // setTimeout(() => {
        //     // window.location.reload();
        //     //     this.setState({ position: 1 });
        // }, 3000);

        // .then(test2()).catch((e) => {
        // console.log(e)})

        // var el = document.querySelector('td[data-date="2022-06-05"]');
        // el.style.backgroundImage = `url(${Test})`
    }, [])

    async function getCalendar() {
        const body = JSON.stringify({query});
        const token = process.env.REACT_APP_ACCESS_TOKEN;
        const response = await protectedEnpointPostRequest(
            `${process.env.REACT_APP_CONTENTFUL_API}/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
            body,
            token
        )
        if (response) {
            setAllConcerts(response.data.data.concertCollection.items)
            for (let i = 0; i < response.data.data.concertCollection.items.length; i++) {
                const newDate = new Date(parseInt(response.data.data.concertCollection.items[i].year),
                    4,
                    parseInt(response.data.data.concertCollection.items[i].day))
                setAllMappedConcerts(elem => [...elem,
                        {
                            title: response.data.data.concertCollection.items[i].bandName,
                            date: newDate,
                            url: response.data.data.concertCollection.items[i].coverImage.url
                        }
                    ]
                )
                // const dateFormatted = moment(newDate).format('YYYY-MM-DD').toString()
                // console.log(dateFormatted)
                // var el = document.querySelector(`td[data-date="${dateFormatted}"]`);
                // el.style.backgroundImage = `url(${response.data.data.concertCollection.items[i].coverImage.url})`
                // console.log('response.data.data.concertCollection.items[i].title',response.data.data.concertCollection.items[i].coverImage.url)
                // mapAllConcerts(response.data.data.concertCollection.items[i])
            }
        }
        // console.log(allConcerts)
        // return true;
    }

    // const test =  test2()

    async function test2() {
        allMappedConcerts.map((item, i) => {
            const dateFormatted = moment(item.date).format('YYYY-MM-DD').toString()

            let el = document.querySelector(`td[data-date="${dateFormatted}"]`);
            el.style.backgroundImage = `url(${allMappedConcerts.url})`

        })
    }


    // const dateFormatted = moment(newDate).format('YYYY-MM-DD').toString()
    // console.log(dateFormatted)

    // async function mapAllConcerts(concertObject) {
    // var $date = new Date(2019, 4, 20);
    // var date = new DateObject($date);
    // var datee = new Date($datee);
    // console.log($datee)
    // console.log(date.format());
    // console.log(concertObject.day,concertObject.month,concertObject.year)
    // var date = new DateObject(` ${concertObject.day} ${concertObject.month} ${concertObject.year}`);
    // console.log('date to map ' , date)
    // var $datee = new Date(parseInt(concertObject.year), 4, parseInt(concertObject.day))
    // const mappedEvents = (concertObject) => allConcerts.map((item, i) => {
    //     setAllMappedConcerts(elem => [...elem,
    //             {
    //                 title: item.title,
    //                 date: new Date(parseInt(concertObject.year), 4, parseInt(concertObject.day))
    //             }
    //         ]
    //     )
    //
    // })

    // setEvents(mappedEvents);
    // }


    // const eventsss = [{title: "today's event", date: new Date()}];
    // console.log('eventsss ', eventsss)

    // async function formatDate(concertObject) {
    //     var $datee = new Date(parseInt(concertObject.year), 4, parseInt(concertObject.day))
    //     console.log('tt',$datee)
    //     return $datee.toString()
    // }

    return (
        <div className="App">
            {allMappedConcerts && (<FullCalendar
                // defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                locale={trLocale}
                events={allMappedConcerts}
                // markingType={'custom'}
                // markedDates={{
                //     '2018-03-28': {
                //         customStyles: {
                //             container: {
                //                 backgroundColor: 'green'
                //             },
                //             text: {
                //                 color: 'black',
                //                 fontWeight: 'bold'
                //             }
                //         }
                //     },
                //     '2022-06-01': {
                //         customStyles: {
                //             container: {
                //                 backgroundColor: 'black',
                //                 elevation: 2
                //             },
                //             text: {
                //                 color: 'blue'
                //             }
                //         }
                //     }
                // }}
            />)}
        </div>
    );
}


const query = `
{
  concertCollection{
    items{
      bandName
      bandDescription
      month
      year
      day
      coverImage {
        title
        url
      }
    }
  }
}`