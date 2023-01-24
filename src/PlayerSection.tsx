import React, { useRef, useState } from 'react'

type Props = {
    firstPlayer: string
    secondPlayer:string
    setFirstPlayer:React.Dispatch<React.SetStateAction<string>>
    setSecondPlayer: React.Dispatch<React.SetStateAction<string>>
    turn?: boolean
    isWinner?: boolean
    isLoser?:boolean
}

export default function PlayerSection({setFirstPlayer, setSecondPlayer, firstPlayer, secondPlayer, turn = false, isWinner = false, isLoser= false}: Props) {

    const playerFirstNameRef = useRef<any>(null)
    const playerSecondNameRef = useRef<any>(null)

    const [hideInputs, setHideInputs] = useState(false)
    const [hideInputs1, setHideInputs1] = useState(false)

    const gameSetupHandler = () => {
        if(playerFirstNameRef.current.value === ""){
            setFirstPlayer("Please enter a name")
        }else if(playerFirstNameRef.current.value === secondPlayer){
            setFirstPlayer("Please enter a different name")
        }else{
            setFirstPlayer(playerFirstNameRef.current.value)
            setHideInputs(true)
        }
    }


    const gameSetupHandler1 = () => {

        if(playerSecondNameRef.current.value === ""){
            setSecondPlayer("Please enter a name")
        }else if(playerSecondNameRef.current.value === firstPlayer){
            setSecondPlayer("Please enter a different name")
        }else{
            setSecondPlayer(playerSecondNameRef.current.value)
            setHideInputs1(true)
        }
    }


  return (
    <div style={{position:"absolute", width:"80%", display:"flex", justifyContent:"space-between", top:"10%", alignItems:"baseline"}}>

        <div style={{display:"flex",flexDirection:"column", gap:".5em"}}>
            <h2 style={{fontWeight:"lighter", color:"red", visibility: turn || isLoser || isWinner || !hideInputs ? "hidden" : "visible"}}>Now Playing:</h2>
            <h2 style={{fontWeight:"lighter"}}>Player 1: {firstPlayer}</h2>
            {!hideInputs && 
            <>
                <input ref={playerFirstNameRef} className='player__input' type="text" />
                <button onClick={() => gameSetupHandler()} type='submit' className="player__button">Start</button>
            </>
            }
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:".5em"}}>
            <h2 style={{fontWeight:"lighter", color:"red", visibility: turn && !isLoser && !isWinner ? "visible" : "hidden"}}>Now Playing:</h2>
            <h2 style={{fontWeight:"lighter"}}>Player 2: {secondPlayer} </h2>
            {!hideInputs1 &&
            <>
                <input ref={playerSecondNameRef}  className='player__input' type="text" />
                <button onClick={() => gameSetupHandler1()} className="player__button">Start</button>
            </>
            }
        </div>

    </div>
  )
}