import { useCallback, useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import HangmanKeyboard from './HangmanKeyboard'
import words from "./wordList.json"
import PlayerSection from './PlayerSection'

function App() {

  //*get random letter from json file
  const [wordToGuess, setwordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  //*guessedletters state
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  //*guessed letter count for drawing component
  const guessedLetterCount = guessedLetters.length;
  
    //*win logic
    const isWinner = wordToGuess.split("").every(letter => 
      guessedLetters.includes(letter))
        
      //*incorrect letters
      const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

      //*lose logic
      const isLoser = incorrectLetters.length >= 6;

//*add letter function
  const addGuessedLetter = useCallback((letter: string) => {

    if(guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },[guessedLetters])

  //*keep player names
  const [firstPlayer, setFirstPlayer] = useState("")
  const [secondPlayer, setSecondPlayer] = useState("")

  //!correct same name mistake

  const [winner, setWinner] = useState("")

  //* turn logic to show who's playing label
  const [turn, setTurn] = useState(false)

  useEffect(() => {
    if(guessedLetterCount %2 == 0){
      //*setTurn true means second player is playing
      setTurn(false)
    }else{
      setTurn(true)
    }
  }, [guessedLetterCount])

  useEffect(() => {
    if(guessedLetterCount %2 == 0 && isWinner){
      setWinner(secondPlayer)
    }else{
      setWinner(firstPlayer)
    }
  }, [guessedLetterCount])

  

  return (
    <>
      <div style={{display:"flex", maxWidth:"800px", flexDirection:"column", gap:"2rem", margin:"0 auto", justifyContent:"center", alignItems:"center"}}>
      <div style={{color:"red", fontSize:"20px", fontWeight:"bold"}}>
        <div style={{height:"20px"}}>
        {isWinner && `${winner} YOU WON! REFRESH TO PLAY AGAİN`}
        {isLoser && "TIE! REFRESH TO PLAY AGAİN"}
        </div>
      </div>
        <HangmanDrawing guessedLetterCount={incorrectLetters.length}  />
        <PlayerSection isWinner={isWinner} isLoser={isLoser} turn={turn} firstPlayer={firstPlayer} secondPlayer={secondPlayer} setFirstPlayer={setFirstPlayer} setSecondPlayer={setSecondPlayer}
        />
        <HangmanWord reveal={isLoser || isWinner} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <div style={{alignSelf:"stretch"}}>
          <HangmanKeyboard firstPlayer={firstPlayer} secondPlayer={secondPlayer} activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} 
          disabled={isLoser || isWinner } />
        </div>
      </div>
    </>
  )
}

export default App
