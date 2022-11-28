"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../../styles/Home.module.css"
import Link from "next/link"
const HotEvents = () => {
    const [events, setEvents] = useState([])
    const getEvents = async () => {
        const rawData = await fetch("https://eventsapp-learnio.herokuapp.com/api/events?populate=*")
        const cData = await rawData.json()
        setEvents(cData.data)
    }
    useEffect(()=>{
        getEvents()
        
    }, [])
    const plus1Day = new Date();
    plus1Day.setDate(plus1Day.getDate() + 1);

  return (
    <div className={styles.hero_events}>
        <h1>Hot Events :)</h1>
        <div className={styles.events}>
        {
            events?.map((event)=>{
                const newDate = new Date(event.attributes.EventDate)
                if(plus1Day.toDateString() === newDate.toDateString()){
                    return (
                        <Link key={event.id} href={`/events/${event.id}`}>
                        <div className={styles.single_event}>
                            <h3>{event.attributes.EventName}</h3>
                            <div className={styles.event_info}>
                                <h5>{event.attributes.EventLocation}</h5>
                                <h5>{newDate.toString().slice(0, 15)}</h5>
                            </div>
                        </div></Link>
                    )
                }
            })
        }
        </div>
    </div>
  )
}



export default HotEvents