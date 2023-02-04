import { useState } from "react";

const useWordle = (solution) =>{
    
    const [turn,setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history,setHistory] = useState([]);
    const [isCorrect,setIsCorrect] = useState(false);

    const formatGuess = () => {
        const solutionArray = [...solution.word];
        const formatedArray = [...currentGuess].map((letter) =>{
            return{key:letter,color:'grey'};
        });
        
        formatedArray.forEach((value,index) =>{
            if(value.key === solutionArray[index]){
                value.color = "green";
                solutionArray[index]=null;
            }
        });

        formatedArray.forEach((value) =>{
            if(solutionArray.includes(value.key) && value.color!=="green"){
                value.color="yellow";
            }
        });
        return formatedArray;
    };

    const addNewGuess = (formattedGuess) => {
        if(turn<=5){
            setGuesses((prev) =>{
                const newGuesses = [...prev];
                newGuesses[turn] = formattedGuess;
                return newGuesses;
            });
        }
        setTurn(turn+1);
        setHistory([...history,currentGuess]);
        if(currentGuess===solution.word){
            setIsCorrect(true);
        }
        setCurrentGuess("");
    };

    const handleKeys = ({key}) =>{
        console.log(key);

        if(key === "Enter"){
            if(currentGuess.length !== 5){
                console.log("LENGTH NOT 5");
                return;
            }
            if(history.includes(currentGuess)){
                console.log("CURRENT GUESS USED");
                return;
            }
            if(turn>5){
                console.log("NO MORE TURNS");
                return;
            }
            console.log("FORMATTING GUESS");
           const formattedGuess = formatGuess();
           addNewGuess(formattedGuess);

        }

        if(key === "Backspace"){
            setCurrentGuess(currentGuess.slice(0,-1));
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length<5){
                setCurrentGuess(currentGuess + key);
            }
        }
    };

    return {handleKeys,currentGuess,guesses,isCorrect};
}

export default useWordle;