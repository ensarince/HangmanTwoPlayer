import React from 'react'

type Props = {
    wordToGuess: string
    guessedLetters: string[]
    reveal?: boolean
}

export default function HangmanWord({wordToGuess, guessedLetters, reveal = false}: Props) {
  console.log(wordToGuess)
  return (
    <div style={{fontSize:"35px", fontWeight:"bold", textTransform:"uppercase", gap:".25em", display:"flex" }}>
        {wordToGuess.split("").map(letter => (
        <span style={{ borderBottom: ".1em solid black"}} key={letter}>
            <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden" , color: !guessedLetters.includes(letter) && reveal  ? "red" : "black"}}>{letter}</span>
        </span>
        ))}
    </div>
  )
}