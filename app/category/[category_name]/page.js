"use client"
import { useState, useEffect } from 'react'
import Link from "next/link"
import styles from "../../../styles/Home.module.css"
export default function Page({params}) {
    let ctName = ""
  if(params.category_name == "music-festival"){
    ctName = "Music Festival"
  } else if(params.category_name == "meetup"){
    ctName = "Meetup"
  }
  else if(params.category_name == "gp"){
    ctName = "Grand Prix"
  }
  else if(params.category_name == "confarence"){
    ctName = "Confarence"
  }
  const [events, setEvents] = useState([])
  const getEvents = async () => {
      const rawData = await fetch(`https://eventsapp-learnio.herokuapp.com/api/events/?populate=*&filters[EventCategory][$eq]=${ctName}`)
      const cData = await rawData.json()
      setEvents(cData.data)
  }
  useEffect(()=>{
      getEvents()
      
  }, [])

    return (
      <div className={styles.cat_events}>
            <h1>{ctName}</h1> 
            <div className={styles.cat_single_events}>
              {
                events.length == 0 ? <h3 style={{textAlign: "center"}}>No Events Found</h3> : ""
              }
            {
            events?.map((event)=>{
                const newDate = new Date(event.attributes.EventDate)
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
            })
        }       
            </div>
      </div>
    )
  }