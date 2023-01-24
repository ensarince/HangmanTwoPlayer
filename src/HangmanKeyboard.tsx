import React,{useEffect, useState} from 'react'
import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

type Props = {
    addGuessedLetter(letter: string): void;
    inactiveLetters: string[]
    activeLetters: string[]
    disabled?: boolean
    firstPlayer:string
    secondPlayer:string
}

export default function HangmanKeyboard({addGuessedLetter, inactiveLetters, activeLetters, disabled=false, firstPlayer, secondPlayer}: Props) {

    const [gameStarted, setGameStarted] = useState(false)

    //!lock also keyboard before names are entered
    useEffect(() => {
      if((firstPlayer !== secondPlayer) &&
         (firstPlayer !== "Please enter a name") &&
        (secondPlayer !== "Please enter a name") &&
        (firstPlayer !== "") &&
        (secondPlayer !== "")){
        setGameStarted(true)
      }
    }, [firstPlayer, secondPlayer])
    

  return (
    <div style={{ display: "grid", gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))", gap:".5rem" }}>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return(
                <button onClick={() => addGuessedLetter(key)} 
                disabled={isActive || isInactive || disabled || !gameStarted }
                className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}>
                {key}
                </button>
            )
        })}
    </div>
  )
}