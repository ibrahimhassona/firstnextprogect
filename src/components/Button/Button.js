"use client";
import styles from './button.module.css'
export default function Button() {
  return (
    <button onClick={()=>{console.log('logout');}} className={styles.logout}>Log Out</button>
  )
}
