"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../../styles/Home.module.css"
import Link from "next/link"
export default function Page() {
  
  const [events, setEvents] = useState([])
  const getEvents = async () => {
      const rawData = await fetch("https://eventsapp-learnio.herokuapp.com/api/events?populate=*")
      const cData = await rawData.json()
      setEvents(cData.data)
      console.log(events);
  }
  useEffect(()=>{
      getEvents()
      
  }, [])
return (
  <div className={styles.all_events} style={{marginBottom: "40px"}}>
      <h1>All Events</h1>
      <div className={styles.events}>
      {
          events?.map((event)=>{
            let ctColor = ""
            if(event.attributes.EventCategory == "Music Festival"){
              ctColor = "#ff006e"
            } else if(event.attributes.EventCategory == "Meetup"){
              ctColor = "#023e8a"
            }
            else if(event.attributes.EventCategory == "Grand Prix"){
              ctColor = "#fca311"
            }
            else if(event.attributes.EventCategory == "Confarence"){
              ctColor = "#d90429"
            }
              const newDate = new Date(event.attributes.EventDate)
              return (
                  <Link key={event.id} href={`/events/${event.id}`}>
                  <div className={styles.single_event}>
                      <img src={event.attributes.FeaturedImage.data.attributes.url} alt={event.attributes.EventName} />
                      <span style={{backgroundColor: ctColor}}>{event.attributes.EventCategory}</span>
                      <div className={styles.event_all_data}>
                        <h3>{event.attributes.EventName}</h3>
                        <div className={styles.event_info}>
                        <h5>{event.attributes.EventLocation}</h5>
                        <h5>{newDate.toString().slice(0, 15)}</h5>
                        </div>
                      </div>
                  </div></Link>
              )
          })
      }
      </div>
  </div>
)
  }