import React from 'react'
import Link from 'next/link';
import styles from "../../styles/Home.module.css"
const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <h1>Events App</h1>
        </div>
        <nav>
            <ul>
                <li><Link href={"/"} >Home</Link></li>
                <li><Link href={"/events"} >All Events</Link></li>
                <li><Link href={"/#categories"}>Categories</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header