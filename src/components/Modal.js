const Modal = ({solution,isCorrect,turn}) =>{
    if(isCorrect){
        return(<div className="modal">
            <h1>YOU WON</h1>
            <p>{solution}</p>
            <p>you won in {turn}</p>
        </div>)
    }
    return(<div className="modal">
        <h1>Nevermind!!</h1>
        <p>{solution}</p>
        <p>Better luck next time :)</p>
    </div>)
}
export default Modal;