import React from 'react'
import styles from "../../styles/Home.module.css"
import Link from "next/link"
const Categories = () => {
  return (
    <div className={styles.categories}>
        <h1>Categories</h1>
        <div className={styles.all_categories}>
            <Link href={`/category/music-festival`}>
                <div style={{backgroundColor: "#ff006e", color: "#fff"}} className={styles.single_category}>
                    <h2>Music Festival</h2>
                </div>
            </Link>
            <Link href={`/category/meetup`}>
            <div style={{backgroundColor: "#023e8a", color: "#fff"}} className={styles.single_category}>
                <h2>Meetup</h2>
            </div>
            </Link>
            <Link href={`/category/gp`}>
            <div style={{backgroundColor: "#fca311", color: "#fff"}} className={styles.single_category}>
                <h2>Grand Prix</h2>
            </div>
            </Link>
            <Link href={`/category/confarence`}>
            <div style={{backgroundColor: "#d90429", color: "#fff"}} className={styles.single_category}>
                <h2>Confarence</h2>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Categories