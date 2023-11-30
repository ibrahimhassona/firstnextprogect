"use client";

import { useContext } from 'react';
import styles from './DarkMoodToggle.module.css';
import { ModeContext } from '@/context/ThemeContext';

export default function DarkMoodToggle() {

  const {mode,toggleMode} = useContext(ModeContext)
  return (
    <div className={styles.container} onClick={toggleMode}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌚</div>
        <div className={styles.switcher}
        style={mode === "dark"?{left:'2px'}:{right:'2px'}}
        />
    </div>
  )
}
