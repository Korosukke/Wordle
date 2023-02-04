import Row from "./Row";
const Grid = ({guesses,turn,isCorrect,currentGuess}) => {
    console.log("Current Guess",currentGuess)
    return (
    <div className="grid">
        {
            guesses.map((guess,index) =>{
                console.log(turn);
                if(index===turn){
                    return <Row currentGuess={currentGuess} key={index}/>
                }
                return <Row guess={guess} key={index}/>
            })
        }
    </div>
    );
}
export default Grid;