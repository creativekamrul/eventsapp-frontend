"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../../../styles/Home.module.css"
export default function Page({params}) {
  
  const [singleEvent, setSingleEvent] = useState({})
  const [loading, setLoading] = useState(true)
  const getEvents = async () => {
      const rawData = await fetch(`https://eventsapp-learnio.herokuapp.com/api/events/${params.event_id}?populate=*`)
      const cData = await rawData.json()
      setSingleEvent(cData.data)
      if(singleEvent){
        setLoading(false)
      }
  }
  useEffect(()=>{
      getEvents()
  }, [])
  const newDate = new Date(singleEvent?.attributes?.EventDate)
  if(loading){
    return(
      <div className={styles.hero_events}>
        <h1>Loading</h1>
    </div>
    )
  }else{
    return (
      <div className={styles.single_events} style={{marginBottom: "40px"}}>
       <div className={styles.single_event}>
            <img src={singleEvent?.attributes.FeaturedImage.data.attributes.url} alt={singleEvent?.attributes.EventName} />
            <div className={styles.event_all_data}>
                <h3>{singleEvent?.attributes.EventName}</h3>
                <div className={styles.event_info}>
                  <h5>{singleEvent?.attributes.EventLocation}</h5>
                  <h5 style={{marginTop: "-10px;"}}>{newDate.toString()}</h5>
                </div>
                <p>{singleEvent?.attributes.EventDescription}</p>
            </div>
          </div>
      </div>
    )
  }

  }